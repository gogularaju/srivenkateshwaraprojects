export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="amberGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Outer Hexagon Shield representing Heavy Engineering */}
      <polygon points="60,4 108,30 108,90 60,116 12,90 12,30" fill="#090D16" stroke="url(#amberGlow)" strokeWidth="5" strokeLinejoin="round" />

      {/* Internal Ground Contours / Land Leveling Layers */}
      <path d="M 24,88 Q 60,104 96,88" fill="none" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      <path d="M 32,96 Q 60,110 88,96" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

      {/* Dual Interlocking 'V' Monogram (Venkata Varnika) */}
      <path d="M 32,32 L 52,78 L 72,32" fill="none" stroke="url(#blueGlow)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 48,32 L 68,78 L 88,32" fill="none" stroke="url(#amberGlow)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />

      {/* Precision Core Anchor */}
      <circle cx="60" cy="78" r="4.5" fill="#FFFFFF" />
    </svg>
  );
}