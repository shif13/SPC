"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sermons", label: "Sermons" },
  { href: "/music", label: "Music" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(10, 10, 15, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="container">
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "var(--gradient-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  boxShadow: "0 0 20px var(--accent-glow)",
                }}
              >
                ✝
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    lineHeight: 1.1,
                  }}
                >
                  Jesudoss Jeyapaul
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: "600",
                  }}
                >
                  Ministries
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "100px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text-primary)";
                  (e.target as HTMLElement).style.background = "var(--bg-elevated)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text-secondary)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "12px" }}>
            <a
              href="https://www.youtube.com/@jesudossjeyapaul"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "9px 20px", fontSize: "0.82rem" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              Watch Live
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-primary)",
              cursor: "pointer",
              padding: "8px",
            }}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{
              borderTop: "1px solid var(--border)",
              padding: "16px 0 20px",
              background: "rgba(10, 10, 15, 0.98)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 0",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontFamily: "var(--font-sans)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.youtube.com/@jesudossjeyapaul"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: "16px", width: "100%", justifyContent: "center" }}
            >
              Watch on YouTube
            </a>
          </div>
        )}
      </div>
    </header>
  );
}