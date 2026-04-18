"use client";

import { Video, formatDate, getYouTubeUrl } from "@/lib/youtube";
import Image from "next/image";

interface MusicCardProps {
  video: Video;
}

export default function MusicCard({ video }: MusicCardProps) {
  return (
    <a
      href={getYouTubeUrl(video.id)}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        textDecoration: "none",
        padding: "16px",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border)",
        background: "var(--bg-card)",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border-hover)";
        el.style.background = "var(--bg-elevated)";
        el.style.transform = "translateX(4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.background = "var(--bg-card)";
        el.style.transform = "translateX(0)";
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          width: "96px",
          height: "96px",
          borderRadius: "var(--radius-sm)",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="96px"
        />
        {/* Play icon overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: "var(--gradient-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "2px" }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.95rem",
            fontWeight: "600",
            color: "var(--text-primary)",
            marginBottom: "6px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {video.title}
        </h4>
        <div
          style={{
            fontSize: "0.75rem",
            color: "var(--gold)",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
          {formatDate(video.publishedAt)}
        </div>
      </div>

      {/* Arrow */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{ color: "var(--text-muted)", flexShrink: 0 }}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}