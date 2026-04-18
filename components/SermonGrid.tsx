import { Video } from "@/lib/youtube";
import SermonCard from "./SermonCard";
import Link from "next/link";

interface SermonGridProps {
  videos: Video[];
  showFeatured?: boolean;
  limit?: number;
}

export default function SermonGrid({ videos, showFeatured = false, limit = 9 }: SermonGridProps) {
  const displayVideos = videos.slice(0, limit);
  const featuredVideo = showFeatured ? displayVideos[0] : null;
  const gridVideos = showFeatured ? displayVideos.slice(1) : displayVideos;

  if (displayVideos.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-secondary)" }}>
        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎬</div>
        <p>No sermons found. Check back soon!</p>
      </div>
    );
  }

  return (
    <section
      style={{
        padding: "100px 0",
        background: "var(--bg)",
      }}
    >
      <div className="container">
        {/* Section header */}
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
            <div className="section-label">Recent Messages</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginTop: "4px",
              }}
            >
              Latest Sermons
            </h2>
          </div>
          <Link href="/sermons" className="btn-secondary">
            View All Sermons
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Featured (first video, wider) */}
        {featuredVideo && (
          <div style={{ marginBottom: "32px" }}>
            <SermonCard video={featuredVideo} featured />
          </div>
        )}

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {gridVideos.map((video, i) => (
            <div
              key={video.id}
              style={{
                animation: `fadeUp 0.5s ${i * 0.07}s ease both`,
              }}
            >
              <SermonCard video={video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}