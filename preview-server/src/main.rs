use color_eyre::eyre::{self, OptionExt};
use std::{
    io::{BufRead, BufReader},
    net::{TcpListener, TcpStream},
};

use preview_server::{find_file, HttpResponse};

fn handle_connection(mut stream: TcpStream) -> eyre::Result<()> {
    let buf_reader = BufReader::new(&mut stream);
    let request_line = buf_reader
        .lines()
        .next()
        .ok_or_eyre("buf_reader stopped unexpectedly")??;

    println!("{request_line}");

    let response: HttpResponse = find_file(&request_line)?;

    response.send(stream)?;

    Ok(())
}

fn main() -> eyre::Result<()> {
    let listener = TcpListener::bind("127.0.0.1:7878")?;
    println!("http://localhost:7878/");

    for stream in listener.incoming() {
        handle_connection(stream?)?;
    }

    Ok(())
}
