import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export function ServiceCard({
  number,
  slug,
  title,
  summary,
  image,
  imageAlt,
  featured = false,
}: ServiceCardProps) {
  return (
    <article className={featured ? "service-card service-card-featured" : "service-card"}>
      <Link aria-label={`Learn about ${title}`} className="service-image-link" href={`/services#${slug}`}>
        <Image
          alt={imageAlt}
          className="service-image"
          fill
          sizes={featured ? "(max-width: 760px) 100vw, 58vw" : "(max-width: 760px) 100vw, 34vw"}
          src={image}
        />
        <span className="image-number">{number}</span>
      </Link>
      <div className="service-card-copy">
        <span className="service-card-kicker">Cargo services</span>
        <h3><Link href={`/services#${slug}`}>{title}</Link></h3>
        <p>{summary}</p>
        <Link className="text-link" href={`/services#${slug}`}>
          Explore service <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
