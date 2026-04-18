"use client";

import { Video, formatDate, getYouTubeUrl } from "@/lib/youtube";
import Image from "next/image";

interface SermonCardProps {
  video: Video;
  featured?: boolean;
}

export default function SermonCard({ video, featured = false }: SermonCardProps) {
  const youtubeUrl = getYouTubeUrl(video.id);

  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        textDecoration: "none",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--gradient-card)",
        border: "1px solid var(--border)",
        transition: "all 0.3s ease",
        position: "relative",
        ...(featured && {
          gridColumn: "span 2",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }),
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.borderColor = "var(--border-hover)";
        el.style.boxShadow = "var(--shadow-card), 0 0 30px rgba(200,16,46,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          aspectRatio: featured ? "auto" : "16/9",
          ...(featured && { minHeight: "280px" }),
          overflow: "hidden",
        }}
      >
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,10,15,0.8) 0%, transparent 50%)",
          }}
        />

        {/* Play button */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.2s",
          }}
          className="play-overlay"
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "var(--gradient-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px var(--accent-glow)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "2px" }}>
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>

        {/* YouTube badge */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(255,0,0,0.9)",
            borderRadius: "4px",
            padding: "3px 8px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
          <span style={{ color: "white", fontSize: "0.65rem", fontWeight: "700", letterSpacing: "0.05em" }}>
            YOUTUBE
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: featured ? "32px" : "20px" }}>
        <div
          style={{
            fontSize: "0.75rem",
            color: "var(--gold)",
            fontWeight: "600",
            letterSpacing: "0.08em",
            marginBottom: "8px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {formatDate(video.publishedAt)}
        </div>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: featured ? "1.5rem" : "1.05rem",
            fontWeight: "600",
            color: "var(--text-primary)",
            lineHeight: "1.3",
            marginBottom: "12px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {video.title}
        </h3>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.875rem",
            lineHeight: "1.7",
            display: "-webkit-box",
            WebkitLineClamp: featured ? 3 : 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginBottom: "20px",
          }}
        >
          {video.description || "A powerful message from the Word of God."}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "var(--accent-light)",
            fontSize: "0.85rem",
            fontWeight: "600",
          }}
        >
          Watch on YouTube
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      <style>{`
        a:hover .play-overlay { opacity: 1 !important; }
        @media (max-width: 768px) {
          a[style*="grid-column: span 2"] {
            grid-column: span 1 !important;
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </a>
  );
}