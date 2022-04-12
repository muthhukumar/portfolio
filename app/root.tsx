import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Email, Navbar, Socials } from "./components";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import indexStylesheetUrl from "./styles/index.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: indexStylesheetUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="h-full dark scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full dark:bg-black">
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Socials />
        <Email />
      </body>
    </html>
  );
}
