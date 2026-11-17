import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="shell page-intro-inner">
        <div>
          <span className="eyebrow eyebrow-light">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <Link className="button button-gold" href="/request-quote">
          Request a quote <ArrowRight size={17} />
        </Link>
      </div>
      <div aria-hidden="true" className="intro-lines" />
    </section>
  );
}
