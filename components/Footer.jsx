import Link from "next/link";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left: copyright */}
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sagar Gohil. All rights reserved.
        </div>

        {/* Center: socials (optional) */}
        <div className="flex justify-center">
          <Socials
            containerStyles="flex gap-4"
            iconStyles="w-8 h-8 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-300"
          />
        </div>

        {/* Right: nav links (optional) */}
        <div className="flex gap-6 text-sm text-white/60">
          <Link href="#top">Home</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#hire-us">Hire Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
