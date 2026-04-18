import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-card)",
        padding: "60px 0 32px",
        marginTop: "auto",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginBottom: "8px",
              }}
            >
              Jesudoss Jeyapaul
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Ministries
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: "1.7", maxWidth: "260px" }}>
              Proclaiming the transforming power of God's Word in Chennai and beyond.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontWeight: "600", marginBottom: "16px" }}>
              Navigate
            </div>
            {[
              { href: "/", label: "Home" },
              { href: "/sermons", label: "Sermons" },
              { href: "/about", label: "About" },
              { href: "/events", label: "Events" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  marginBottom: "10px",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontWeight: "600", marginBottom: "16px" }}>
              Connect
            </div>
            <a
              href="https://www.youtube.com/@jesudossjeyapaul"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "0.9rem",
                marginBottom: "12px",
                transition: "color 0.2s",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#FF0000" }}>
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              YouTube Channel
            </a>
            <div
              style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "8px" }}
            >
              📍 Chennai, Tamil Nadu, India
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Jesudoss Jeyapaul Ministries. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
            Built with faith ✝
          </p>
        </div>
      </div>
    </footer>
  );
}