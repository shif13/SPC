import { Video } from "@/lib/youtube";
import MusicCard from "@/components/MusicCard";
import Link from "next/link";
import Image from "next/image";

interface MusicSectionProps {
  songs: Video[];
  latestSong: Video | null;
}

export default function MusicSection({ songs, latestSong }: MusicSectionProps) {
  return (
    <section
      style={{
        padding: "100px 0",
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "56px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <div className="section-label">Worship Music</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginTop: "4px",
              }}
            >
              Songs & Worship
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "10px", maxWidth: "420px" }}>
              Original songs written by our pastor — music that carries the heart of the ministry.
            </p>
          </div>
          <Link href="/music" className="btn-secondary">
            View All Songs
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Two-column layout: featured left, list right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
          className="music-grid"
        >
          {/* Featured latest song */}
          {latestSong && (
            <a
              href={`https://www.youtube.com/watch?v=${latestSong.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textDecoration: "none",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "var(--bg-elevated)",
                transition: "transform 0.3s ease, border-color 0.3s ease",
              }}
            >
              {/* Thumbnail */}
              <div style={{ position: "relative", aspectRatio: "16/9" }}>
                <Image
                  src={latestSong.thumbnail}
                  alt={latestSong.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,10,15,0.85) 0%, transparent 60%)",
                  }}
                />
                {/* Gold play button */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "var(--gradient-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 30px var(--gold-glow)",
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "3px" }}>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Latest badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "var(--gradient-gold)",
                    borderRadius: "100px",
                    padding: "4px 12px",
                    fontSize: "0.7rem",
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    color: "#1a1000",
                    textTransform: "uppercase",
                  }}
                >
                  Latest
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {latestSong.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.85rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {latestSong.description || "A song of worship and praise."}
                </p>
              </div>
            </a>
          )}

          {/* Song list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {songs.slice(1, 7).map((song) => (
              <MusicCard key={song.id} video={song} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .music-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}