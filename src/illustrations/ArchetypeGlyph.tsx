const paths: Record<string, string> = {
  creator: "M32 20 L44 44 L20 44 Z",
  sage: "M32 18 L46 46 H18 Z M32 26 v14",
  hero: "M20 46 L32 16 L44 46 M26 34 h12",
  explorer: "M24 42 L32 20 L40 42 M28 36 h8",
  magician: "M32 18c8 0 14 6 14 14s-6 14-14 14-14-6-14-14 6-14 14-14z M32 28v12",
  ruler: "M22 24h20v18H22z M26 30h12v2H26z",
  caregiver: "M32 20c-6 0-10 5-10 11v15h20V31c0-6-4-11-10-11z",
  everyman:
    "M32 20c-5 0-9 4-9 9v19h18V29c0-5-4-9-9-9zm0-8a5 5 0 110 10 5 5 0 010-10z",
  jester: "M20 30 Q32 18 44 30 Q32 42 20 30",
  lover: "M32 26c-4-4-10-2-10 4 0 6 10 14 10 14s10-8 10-14c0-6-6-8-10-4z",
  outlaw: "M26 22 L38 34 M38 22 L26 34",
  innocent: "M32 18a14 14 0 100 28 14 14 0 000-28zm-6 16h12",
};

export function ArchetypeGlyph({
  name,
  title,
}: {
  name: keyof typeof paths;
  title: string;
}) {
  const d = paths[name];
  return (
    <svg
      viewBox="0 0 64 64"
      width="48"
      height="48"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="12" fill="rgba(27,42,74,0.06)" stroke="rgba(27,42,74,0.15)" />
      <path
        d={d}
        fill="none"
        stroke="#1B2A4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const archetypeKeys = [
  "creator",
  "sage",
  "hero",
  "explorer",
  "magician",
  "ruler",
  "caregiver",
  "everyman",
  "jester",
  "lover",
  "outlaw",
  "innocent",
] as const;
