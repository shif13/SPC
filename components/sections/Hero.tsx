"use client";

import { Video, formatDate, getYouTubeUrl } from "@/lib/youtube";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  latestSermon: Video | null;
}

export default function Hero({ latestSermon }: HeroProps) {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "72px",
      }}
    >
      {/* Background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-hero)",
        }}
      />
      {/* Accent orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,16,46,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
            padding: "80px 0",
          }}
          className="hero-grid"
        >
          {/* Left: Text */}
          <div>
            <div className="section-label animate-fade-up-delay-1">
              Latest Sermon
            </div>

            <h1
              className="animate-fade-up-delay-2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "700",
                lineHeight: "1.1",
                marginBottom: "24px",
                color: "var(--text-primary)",
              }}
            >
              {latestSermon
                ? latestSermon.title
                : "Experience God's\nTransforming Word"}
            </h1>

            <p
              className="animate-fade-up-delay-3"
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "16px",
                maxWidth: "480px",
              }}
            >
              {latestSermon
                ? latestSermon.description.slice(0, 160) + "..."
                : "Join us every Sunday for powerful messages from the Word of God that transform lives and communities."}
            </p>

            {latestSermon && (
              <p
                className="animate-fade-up-delay-3"
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.85rem",
                  marginBottom: "36px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {formatDate(latestSermon.publishedAt)}
              </p>
            )}

            <div
              className="animate-fade-up-delay-4"
              style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
            >
              {latestSermon ? (
                <a
                  href={getYouTubeUrl(latestSermon.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Now
                </a>
              ) : (
                <a
                  href="https://www.youtube.com/@jesudossjeyapaul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Sermons
                </a>
              )}
              <Link href="/sermons" className="btn-secondary">
                Browse All
              </Link>
            </div>
          </div>

          {/* Right: Video Thumbnail */}
          {latestSermon && (
            <div className="animate-fade-up-delay-3" style={{ position: "relative" }}>
              <a
                href={getYouTubeUrl(latestSermon.id)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "16/9",
                  boxShadow: "var(--shadow-hero)",
                  border: "1px solid var(--border)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                <Image
                  src={latestSermon.thumbnail}
                  alt={latestSermon.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Play overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      background: "var(--gradient-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 40px var(--accent-glow)",
                      animation: "pulse-glow 3s ease-in-out infinite",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "3px" }}>
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </a>

              {/* Decorative ring */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "-12px",
                  borderRadius: "calc(var(--radius-xl) + 12px)",
                  border: "1px solid var(--border)",
                  pointerEvents: "none",
                }}
              />
            </div>
          )}
        </div>

        {/* Stats bar */}
        <div
          className="animate-fade-up-delay-4"
          style={{
            display: "flex",
            gap: "48px",
            paddingBottom: "60px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Years of Ministry", value: "15+" },
            { label: "Sermons Online", value: "200+" },
            { label: "Lives Transformed", value: "1000s" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: "700",
                  background: "var(--gradient-gold)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "2px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 60px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}