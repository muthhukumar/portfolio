import { Link } from "@remix-run/react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import Icon from "./icon";

const socials = [
  {
    url: "https://clipi.nullish.in/r/github",
    icon: FaGithub,
    alt: "Github",
    size: 20,
  },
  {
    url: "https://clipi.nullish.in/r/twitter",
    icon: FaTwitter,
    alt: "Twitter",
    size: 20,
  },
  {
    url: "https://clipi.nullish.in/r/linkedin",
    icon: FaLinkedinIn,
    alt: "LinkedIn",
    size: 20,
  },
];

export default function Socials() {
  return (
    <div className="fixed bottom-0 flex-col items-center hidden pt-6 md:flex text left-12 opacity">
      <div className="flex flex-col gap-y-8">
        {socials.map((social) => {
          return (
            <a
              href={social.url}
              key={social.alt}
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon={social.icon} />
            </a>
          );
        })}
      </div>
      <div className="background-invert mt-8 h-20 w-[0.5px]"></div>
    </div>
  );
}
