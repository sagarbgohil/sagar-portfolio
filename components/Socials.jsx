import Link from "next/link";
import React from "react";
import { FaGithub, FaGitlab, FaLinkedin, FaDev } from "react-icons/fa";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/sagarbgohil" },
  { icon: <FaGitlab />, link: "https://gitlab.com/sagarbgohil" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/gohilsagar" },
  { icon: <FaXTwitter />, link: "https://x.com/SagarbGohil" },
  { icon: <SiMedium />, link: "https://medium.com/@gohilbsagar" },
  { icon: <FaHashnode />, link: "https://sagargohil.hashnode.dev" },
  { icon: <FaDev />, link: "https://dev.to/sagargohil" },
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
          className={`${iconStyles}`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
