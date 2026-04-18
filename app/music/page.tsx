import { getLatestSongs } from "@/lib/youtube";
import MusicCard from "@/components/MusicCard";
import Link from "next/link";

export const metadata = {
  title: "Worship Music | Jesudoss Jeyapaul Ministries",
  description: "Listen to original worship songs written by Pastor Jesudoss Jeyapaul.",
};

export default async function MusicPage() {
  const songs = await getLatestSongs(20);

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Page header */}
      <div
        style={{
          background: "var(--bg-card)",
          borderBottom: "1px solid var(--border)",
          padding: "80px 0 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <div className="section-label">Worship Music</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            Songs & Worship
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              maxWidth: "520px",
              lineHeight: "1.8",
              marginBottom: "24px",
            }}
          >
            Original songs written by our pastor — music that carries the heart of the ministry into your home.
          </p>
          <a
            href="https://www.youtube.com/channel/UCotIcbjgw8Ydu2S8a-ClfDw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ background: "var(--gradient-gold)", color: "#1a1000" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
            Subscribe to Music Channel
          </a>
        </div>
      </div>

      {/* Songs grid */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "16px",
            }}
          >
            {songs.map((song, i) => (
              <div
                key={song.id}
                style={{ animation: `fadeUp 0.4s ${i * 0.05}s ease both` }}
              >
                <MusicCard video={song} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}