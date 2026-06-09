import { ImageResponse } from "next/og";

export const alt = "Tiggi Kids Chocolate";
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
          display: "flex",
          height: "100%",
          width: "100%",
          padding: 48,
          background:
            "radial-gradient(circle at top right, rgba(255,188,128,0.85), transparent 30%), linear-gradient(135deg, #fff7eb 0%, #f4e3d3 60%, #f3cfad 100%)",
          color: "#2a1711",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            borderRadius: 40,
            border: "1px solid rgba(255,255,255,0.8)",
            background: "rgba(255,252,247,0.72)",
            padding: 42,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: 680 }}>
            <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#784636" }}>
              Tiggi Kids Chocolate
            </div>
            <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 800 }}>
              Детский шоколад, который выглядит premium и продает эмоцией.
            </div>
            <div style={{ display: "flex", gap: 14 }}>
              {['витамин D3', 'омега 3', 'кокосовый сахар'].map((item) => (
                <div key={item} style={{ padding: '14px 18px', borderRadius: 999, background: 'rgba(255,255,255,0.92)', fontSize: 24 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: 280,
              borderRadius: 36,
              background: "linear-gradient(160deg, #4e281e, #ab6d51 55%, #f8b26f)",
              boxShadow: "0 30px 70px rgba(74,36,24,0.24)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
