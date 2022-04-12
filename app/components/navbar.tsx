import { Link } from "@remix-run/react";

const links = [
  {
    pathname: "About",
    to: "/about",
  },
  {
    pathname: "Experience",
    to: "/experience",
  },
  {
    pathname: "Work",
    to: "/work",
  },
  {
    pathname: "Contact",
    to: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="flex px-12 py-8 align-baseline">
      <nav>
        <div className="flex items-center justify-center w-12 h-12">
          <h1 className="text-xl font-bold text-sky-500">M</h1>
        </div>
      </nav>
      <ul className="flex items-center ml-auto gap-x-6">
        {links.map((link, index) => (
          <li key={link.to}>
            <Link to={"/about"} className="text-sm font-semibold text">
              {link.pathname}
            </Link>
          </li>
        ))}
      </ul>
      <a
        href="/resume.pdf"
        className="px-4 py-2 my-auto ml-6 text-sm border rounded-md text-sky-600 border-sky-600"
      >
        Resume
      </a>
    </header>
  );
}
