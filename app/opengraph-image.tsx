import { ImageResponse } from "next/og";
import { OG_IMAGE_ALT, SITE_NAME } from "@/lib/site";

export const alt = OG_IMAGE_ALT;
export const size = { width: 1200, height: 630 };
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
          justifyContent: "space-between",
          background: "#09090b",
          color: "#f4f4f5",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#00ff41",
              color: "#041208",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            X1
          </div>
          <div style={{ fontSize: 28, fontWeight: 600 }}>{SITE_NAME}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 56, fontWeight: 650, lineHeight: 1.1 }}>
            iPhones, games e eletrônicos em Sorocaba e Tatuí
          </div>
          <div style={{ fontSize: 26, color: "#a1a1aa" }}>
            Novos e seminovos · até 21x · troca do usado · estoque do dia no WhatsApp
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
