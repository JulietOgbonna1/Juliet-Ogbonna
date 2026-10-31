import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Juliet Ogbonna — Frontend Developer & Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const photo = await readFile(path.join(process.cwd(), "public/images/juliet-square.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: "radial-gradient(circle at 80% 20%, #6e0d01 0%, #1a0805 45%, #0c0605 100%)", color: "#f2e6ce", padding: 80, gap: 60 }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 24, letterSpacing: 6, textTransform: "uppercase", color: "#ff8a66" }}>Portfolio</div>
          <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1, marginTop: 24, letterSpacing: -3 }}>Juliet Ogbonna</div>
          <div style={{ fontSize: 36, marginTop: 24, color: "#d4c2ad" }}>Frontend Developer & Designer</div>
          <div style={{ fontSize: 24, marginTop: 40, color: "#9b8576" }}>React · Next.js · Tailwind CSS · Node.js</div>
        </div>
        <img src={src} width={340} height={340} alt="" style={{ borderRadius: 340, border: "8px solid #c4321a", objectFit: "cover" }} />
      </div>
    ),
    size,
  );
}
