import { socials } from "@/lib/constants";
import Link from "next/link";
import React from "react";

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
