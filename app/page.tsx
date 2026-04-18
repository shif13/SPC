import { getLatestVideos, getLatestSermon, getLatestSongs, getLatestSong } from "@/lib/youtube";
import Hero from "@/components/sections/Hero";
import SermonGrid from "@/components/SermonGrid";
import MusicSection from "@/components/MusicSection";
import InfoCard from "@/components/InfoCard";
import Link from "next/link";

export default async function HomePage() {
  const [latestSermon, videos, latestSong, songs] = await Promise.all([
    getLatestSermon(),
    getLatestVideos(7),
    getLatestSong(),
    getLatestSongs(7),
  ]);

  return (
    <>
      {/* Hero */}
      <Hero latestSermon={latestSermon} />

      {/* Sermon Grid */}
      <SermonGrid videos={videos} showFeatured limit={7} />

      {/* Music Section */}
      <MusicSection songs={songs} latestSong={latestSong} />

      {/* Visit Us CTA */}
      <section
        style={{
          padding: "100px 0",
          background: "var(--bg-card)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative orb */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Our Church
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "700",
              color: "var(--text-primary)",
              marginBottom: "20px",
              maxWidth: "700px",
              margin: "0 auto 20px",
            }}
          >
            You Are Welcome Here
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              maxWidth: "560px",
              margin: "0 auto 40px",
            }}
          >
            Whether you're new to faith or have walked with God for years, there's a place for you in our community. Join us this Sunday in Chennai.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about" className="btn-primary">
              Learn About Us
            </Link>
            <Link href="/contact" className="btn-secondary">
              Plan Your Visit
            </Link>
          </div>

          {/* Info cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "24px",
              marginTop: "64px",
              maxWidth: "700px",
              margin: "64px auto 0",
            }}
          >
            {[
              { icon: "🕊️", title: "Sunday Service", detail: "Every Sunday Morning" },
              { icon: "📍", title: "Location", detail: "Chennai, Tamil Nadu" },
              { icon: "🎬", title: "Online", detail: "YouTube Live Stream" },
            ].map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "24px 40px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#FF0000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "var(--text-primary)",
                  marginBottom: "4px",
                }}
              >
                Subscribe on YouTube
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                Never miss a sermon · @jesudossjeyapaul
              </div>
            </div>
            <a
              href="https://www.youtube.com/@jesudossjeyapaul"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ flexShrink: 0 }}
            >
              Subscribe
            </a>
          </div>
        </div>
      </section>
    </>
  );
}