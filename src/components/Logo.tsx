export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Outer Orange Circle */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="#F59E0B" strokeWidth="8" />
      
      {/* Abstract 'S' & 'V' overlapping */}
      <path d="M 30,35 L 50,70 L 70,35" fill="none" stroke="#D97706" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 70,25 C 60,25 50,35 50,50 C 50,65 40,75 30,75" fill="none" stroke="#3B82F6" strokeWidth="12" strokeLinecap="round" />
      
      {/* Top abstract leaves/splashes */}
      <path d="M 40,25 Q 45,15 50,25" fill="#64748B" />
      <path d="M 60,25 Q 55,15 50,25" fill="#0EA5E9" />
    </svg>
  );
}