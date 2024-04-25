/*
Copyright 2024 sby1ce

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { Link, Meta, MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { type JSX, Suspense } from "solid-js";
import "./app.css";

function Favicons(): JSX.Element {
  return (
    <>
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <Meta name="msapplication-TileColor" content="#da532c" />
      <Meta name="theme-color" content="#ffffff" />
    </>
  );
}

function Metadata({ title }: { title: string }): JSX.Element {
  return (
    <>
      <Meta property="og:title" content={title} />
      <Meta property="og:type" content="website" />
      <Meta
        property="og:description"
        content="A website for Twitch chat text-based user interface."
      />
      <Meta
        property="og:url"
        content="https://sby1ce.github.io/twitch-tui-page"
      />
      <Meta
        property="og:image"
        content="https://sby1ce.github.io/twitch-tui-page/picture.png"
      />
      <Meta property="og:updated_time" content="2024-04-19" />
    </>
  );
}

export default function App(): JSX.Element {
  const title: string = "Twitch Chat TUI";
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>{title}</Title>
          <Favicons />
          <Metadata title={title} />

          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
