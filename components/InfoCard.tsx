"use client";

interface InfoCardProps {
  icon: string;
  title: string;
  detail: string;
}

export default function InfoCard({ icon, title, detail }: InfoCardProps) {
  return (
    <div
      style={{
        background: "var(--bg-elevated)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "28px 20px",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{icon}</div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          fontWeight: "600",
          color: "var(--text-primary)",
          marginBottom: "6px",
        }}
      >
        {title}
      </div>
      <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
        {detail}
      </div>
    </div>
  );
}