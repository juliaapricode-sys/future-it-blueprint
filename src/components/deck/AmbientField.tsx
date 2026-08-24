export function AmbientField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="orb bg-violet/50"
        style={{ width: 340, height: 340, top: "-8%", left: "-4%" }}
      />
      <div
        className="orb bg-cyan/40"
        style={{
          width: 280,
          height: 280,
          top: "12%",
          right: "-6%",
          animationDelay: "-6s",
        }}
      />
      <div
        className="orb bg-gold/30"
        style={{
          width: 220,
          height: 220,
          bottom: "-8%",
          left: "38%",
          animationDelay: "-11s",
        }}
      />
      <div className="scanline" />
    </div>
  );
}
