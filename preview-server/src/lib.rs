use color_eyre::eyre;
use std::{
    fs,
    io::{self, Write},
    net::TcpStream,
    path::{Path, PathBuf},
};

const PUBLIC_DIR: &str = "../.output/public";
const NOT_FOUND_PATH: &str = "../.output/public/404.html";
const STATUS_OK: &[u8] = b"HTTP/1.1 200 OK\r\n";
const STATUS_NOT_FOUND: &[u8] = b"HTTP/1.1 404 NOT FOUND\r\n";
const H_CONTENT_LEN: &[u8] = b"Content-Length: ";
const H_CONTENT_TYPE: &[u8] = b"Content-Type: ";
const CT_HTML: &[u8] = b"text/html";
const CT_CSS: &[u8] = b"text/css";
const CT_JS: &[u8] = b"text/javascript";
const CT_ICO: &[u8] = b"image/vnd.microsoft.icon";
const CT_WASM: &[u8] = b"application/wasm";
const CRLF: &[u8] = b"\r\n";

pub struct HttpResponse {
    status: &'static [u8],
    content: Vec<u8>,
    content_type: &'static [u8],
}

impl HttpResponse {
    pub const fn new(status: &'static [u8], content: Vec<u8>, content_type: &'static [u8]) -> Self {
        Self {
            status,
            content,
            content_type,
        }
    }
    pub fn new_not_found() -> Self {
        let contents_404: Vec<u8> =
            fs::read(Path::new(NOT_FOUND_PATH)).unwrap_or_else(|_| b"404 Not Found".to_vec());
        Self::new(STATUS_NOT_FOUND, contents_404, CT_HTML)
    }
    pub fn send(self, mut stream: TcpStream) -> eyre::Result<()> {
        let content_length: String = self.content.len().to_string();
        let response: Vec<u8> = [
            self.status,
            H_CONTENT_LEN,
            content_length.as_bytes(),
            CRLF,
            H_CONTENT_TYPE,
            self.content_type,
            CRLF,
            CRLF,
            &self.content,
        ]
        .concat();
        stream.write_all(&response)?;
        Ok(())
    }
}

fn strip_filename(filename: &str) -> &str {
    filename
        .get(1..(filename.rfind('?').unwrap_or(filename.len())))
        .unwrap_or_default()
}

pub fn find_file(request: &str) -> eyre::Result<HttpResponse> {
    if !request.starts_with("GET /") || !request.ends_with(" HTTP/1.1") {
        return Ok(HttpResponse::new_not_found());
    }

    let Some(filename) = request.split(' ').nth(1).map(strip_filename) else {
        return Ok(HttpResponse::new_not_found());
    };

    let path: PathBuf = Path::new(PUBLIC_DIR).join(filename);

    // Crudely checking whether a new route's index.html was requested
    let contents: io::Result<Vec<u8>> = fs::read(if path.is_dir() {
        path.join("index.html")
    } else {
        path
    });

    // filename.len() to coerce rfind to None
    let extension: Option<&str> =
        filename.get((filename.rfind('.').unwrap_or(filename.len()) + 1)..);
    let content_type: &[u8] = match extension {
        Some("html") | None => CT_HTML,
        Some("css") => CT_CSS,
        Some("js") => CT_JS,
        Some("ico") => CT_ICO,
        Some("wasm") => CT_WASM,
        _ => b"",
    };

    match contents {
        Ok(inner) => Ok(HttpResponse::new(STATUS_OK, inner, content_type)),
        Err(ref error) if error.kind() == io::ErrorKind::NotFound => {
            Ok(HttpResponse::new_not_found())
        }
        Err(error) => Err(eyre::Report::new(error)),
    }
}
