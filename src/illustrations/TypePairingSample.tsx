/** Live type pairing: Inter body + DM Serif heading (Part III / V). */
export function TypePairingSample() {
  return (
    <div
      className="illustration-wrap"
      style={{
        padding: "1rem 1.25rem",
        borderRadius: "var(--radius-sm)",
        background: "color-mix(in srgb, #0f172a 6%, #faf9f5)",
        border: "1px solid #c9c4ba",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.35rem",
          color: "var(--color-navy)",
          margin: "0 0 0.5rem",
        }}
      >
        Editorial heading
      </p>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", margin: 0, maxWidth: "42ch" }}>
        Body set in Inter: modern, rational, and legible for long reading on screen.
      </p>
    </div>
  );
}
