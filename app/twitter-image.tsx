import { ImageResponse } from "next/og";

export const alt = "Huzair Ahmed Khan — Agentic AI Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#BFE600",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              color: "#BFE600",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            huzairahmedkhan.com
          </span>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Huzair Ahmed Khan
        </div>
        <div
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#BFE600",
          }}
        >
          Agentic AI Developer
        </div>
      </div>
    ),
    { ...size }
  );
}
