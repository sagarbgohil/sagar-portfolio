import Link from "next/link";
import React from "react";
import { FaGithub, FaGitlab, FaLinkedin, FaDev } from "react-icons/fa";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/sagarbgohil",
    label: "Github",
  },
  {
    icon: <FaGitlab />,
    link: "https://gitlab.com/sagarbgohil",
    label: "Gitlab",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/gohilsagar",
    label: "LinkedIn",
  },
  { icon: <FaXTwitter />, link: "https://x.com/SagarbGohil", label: "X" },
  {
    icon: <SiMedium />,
    link: "https://medium.com/@gohilbsagar",
    label: "Medium",
  },
  {
    icon: <FaHashnode />,
    link: "https://sagargohil.hashnode.dev",
    label: "Hashnode",
  },
  { icon: <FaDev />, link: "https://dev.to/sagargohil", label: "Dev" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${social.label}`}
          className={`${iconStyles}`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
