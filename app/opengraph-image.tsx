import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0b2a3a 0%, #114a66 55%, #0b2a3a 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1 }}>
          RIGS Electrical
        </div>
        <div style={{ marginTop: 18, fontSize: 34, fontWeight: 650, opacity: 0.95 }}>
          Local Electrician in Tring, Hertfordshire
        </div>
        <div style={{ marginTop: 22, fontSize: 22, opacity: 0.85, maxWidth: 880, lineHeight: 1.35 }}>
          NICEIC registered • Domestic-only • Fault finding • Consumer units • Rewires • Lighting • EICRs
        </div>
        <div style={{ marginTop: 44, display: "flex", gap: 12 }}>
          {["Get a Quote", "Emergency Call-Outs", "Hertfordshire"].map((label) => (
            <div
              key={label}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
