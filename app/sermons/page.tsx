import { getLatestVideos } from "@/lib/youtube";
import SermonGrid from "@/components/SermonGrid";

export const metadata = {
  title: "Sermons | Jesudoss Jeyapaul Ministries",
  description: "Watch and listen to powerful sermons from Jesudoss Jeyapaul Ministries. Be transformed by the Word of God.",
};

export default async function SermonsPage() {
  const videos = await getLatestVideos(12);

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
            background: "radial-gradient(circle, rgba(200,16,46,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <div className="section-label">Messages</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            Sermon Library
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "560px" }}>
            Explore transformative messages from the Word of God. Every sermon is an invitation to encounter His grace.
          </p>
        </div>
      </div>

      {/* Grid */}
      <SermonGrid videos={videos} limit={12} />
    </div>
  );
}