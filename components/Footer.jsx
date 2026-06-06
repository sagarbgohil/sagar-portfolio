import { SOCIALS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span>
          © {new Date().getFullYear()} Sagar Gohil · built in Gujarat, India
        </span>
        <div className="footer-links">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}↗
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
