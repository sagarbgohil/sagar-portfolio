import { siteData } from "@/lib/constants";
const { email: EMAIL, resumeLink: RESUME } = siteData;

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function HireUs() {
  return (
    <section className="section-pad" id="hire">
      <div className="wrap">
        <div className="hire-card reveal">
          <div className="prompt">$ ./start-a-conversation.sh</div>
          <h2>Let&apos;s build something that lasts.</h2>
          <p>
            Got a backend that needs to scale, an API to design, or a product to
            ship? I&apos;m open to roles and freelance work, let&apos;s talk.
          </p>
          <div className="hire-cta">
            <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
              {EMAIL} <ArrowIcon />
            </a>
            <a
              className="btn btn-ghost"
              href={RESUME}
              target="_blank"
              rel="noreferrer"
            >
              view résumé <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
