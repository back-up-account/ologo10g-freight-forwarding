"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { companyName, navigation } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") setMenuOpen(false);
      }}
    >
      <div className="topline">
        <div className="shell topline-inner">
          <span>Nigerian freight forwarding & cargo coordination</span>
          <span className="topline-note">Professional handling. Clear communication.</span>
        </div>
      </div>
      <div className="shell nav-shell">
        <Link
          aria-label={`${companyName} home`}
          className="brand"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">O<span>10</span></span>
          <span className="brand-name">
            <strong>OLOGO10G</strong>
            <small>NIG LTD <span>· FREIGHT FORWARDING</span></small>
          </span>
        </Link>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav aria-label="Main navigation" className={menuOpen ? "main-nav is-open" : "main-nav"}>
          {navigation.map((item) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              className="nav-link"
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="button button-small button-gold nav-cta" href="/request-quote">
            Request a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
