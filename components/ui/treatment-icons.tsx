// Custom SVG icons for the treatments section
// Stroke-based, line style, consistent with medical/wellness aesthetic

export function ObesidadeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Rays around head */}
      <line x1="9" y1="1.5" x2="9" y2="2.8" />
      <line x1="6.5" y1="2.5" x2="7.3" y2="3.3" />
      <line x1="11.5" y1="2.5" x2="10.7" y2="3.3" />
      {/* Head */}
      <circle cx="9" cy="4.8" r="1.6" />
      {/* Overweight body silhouette */}
      <path d="M6.5 7.5 C5.5 9 5 11 5.5 13 C6 14.5 7 15 9 15 C11 15 12 14.5 12.5 13 C13 11 12.5 9 11.5 7.5 C10.8 6.8 7.2 6.8 6.5 7.5Z" />
      {/* Arms */}
      <path d="M5.5 10 C4.5 9.5 4 10 4.2 11" />
      <path d="M12.5 10 C13.5 9.5 14 10 13.8 11" />
      {/* Scale platform */}
      <rect x="4" y="17" width="10" height="1.5" rx="0.5" />
      {/* Scale base */}
      <path d="M3 20 Q9 18.5 15 20" />
      <line x1="9" y1="18.5" x2="9" y2="20" />
    </svg>
  )
}

export function MenopausaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Female symbol */}
      <circle cx="12" cy="9" r="5" />
      <line x1="12" y1="14" x2="12" y2="20" />
      <line x1="9" y1="17" x2="15" y2="17" />
      {/* Hormone wave inside */}
      <path d="M9 9 Q10.5 7 12 9 Q13.5 11 15 9" />
      {/* Hot flash spark */}
      <path d="M18 4 L16.5 6.5 L18 6.5 L16 9" strokeWidth="1.2" />
    </svg>
  )
}

export function HormoniosMasculinosIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Male symbol */}
      <circle cx="10" cy="13" r="5" />
      <line x1="14" y1="9" x2="20" y2="3" />
      <polyline points="16,3 20,3 20,7" />
      {/* Testosterone molecule hint */}
      <path d="M8 13 Q9.5 11 11 13 Q12.5 15 14 13" />
    </svg>
  )
}

export function PosBáriatricaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Stomach outline */}
      <path d="M8 6 C6 6 5 8 5 10 C5 14 7 17 9 18 C11 19 13 18 14 17 C16 15 16 12 15 10 C14.5 8.5 13.5 7 12 6.5" />
      {/* Surgical staple line */}
      <path d="M8 6 Q10 5 12 6.5" strokeDasharray="1.5 1" />
      {/* Small pouch */}
      <path d="M8 6 C7 6 6.5 7 7 8 C7.5 9 8.5 9 9 8" />
      {/* Vitamin pill */}
      <ellipse cx="17" cy="8" rx="2.5" ry="1.2" transform="rotate(-45 17 8)" />
      <line x1="15.7" y1="6.7" x2="18.3" y2="9.3" />
      {/* Arrow down = weight loss */}
      <line x1="12" y1="21" x2="12" y2="23" />
      <polyline points="10,22 12,24 14,22" />
    </svg>
  )
}

export function GestacaoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Head */}
      <circle cx="12" cy="4.5" r="2" />
      {/* Pregnant body */}
      <path d="M10 7 C9 8 8.5 9 8.5 10.5 C8.5 13 9 15 10 16 L14 16 C15 15 15.5 13 15.5 10.5 C15.5 9 14 7.5 12 7 Z" />
      {/* Baby inside */}
      <circle cx="12" cy="11.5" r="2" strokeWidth="1" strokeDasharray="1 0.8" />
      {/* Legs */}
      <line x1="10" y1="16" x2="9" y2="20" />
      <line x1="14" y1="16" x2="15" y2="20" />
      {/* Medical cross */}
      <line x1="19" y1="6" x2="19" y2="10" strokeWidth="1.6" />
      <line x1="17" y1="8" x2="21" y2="8" strokeWidth="1.6" />
    </svg>
  )
}

export function DiabetesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Glucose meter device */}
      <rect x="5" y="8" width="10" height="13" rx="2" />
      {/* Screen */}
      <rect x="7" y="10" width="6" height="4" rx="1" />
      {/* Reading number hint */}
      <line x1="8.5" y1="12" x2="11.5" y2="12" />
      {/* Strip slot */}
      <line x1="10" y1="18" x2="10" y2="21" strokeWidth="2" />
      {/* Blood drop */}
      <path d="M17 4 C17 4 20 7 20 9 C20 10.7 18.7 12 17 12 C15.3 12 14 10.7 14 9 C14 7 17 4 17 4Z" />
    </svg>
  )
}

export function TireoideIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Thyroid butterfly shape */}
      <path d="M12 10 C12 10 9 7 7 7.5 C5 8 4 10 4.5 12 C5 14 7 14.5 9 14 C10.5 13.5 12 12 12 10Z" />
      <path d="M12 10 C12 10 15 7 17 7.5 C19 8 20 10 19.5 12 C19 14 17 14.5 15 14 C13.5 13.5 12 12 12 10Z" />
      {/* Trachea */}
      <line x1="12" y1="14" x2="12" y2="19" />
      <line x1="10" y1="16" x2="14" y2="16" />
      <line x1="10" y1="18" x2="14" y2="18" />
      {/* Pulse/wave above = hormone output */}
      <path d="M8 5 Q9 3.5 10 5 Q11 6.5 12 5 Q13 3.5 14 5 Q15 6.5 16 5" strokeWidth="1.2" />
    </svg>
  )
}

export function PrevencaoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Shield */}
      <path d="M12 3 L20 6.5 L20 12 C20 16.5 16.5 20.5 12 22 C7.5 20.5 4 16.5 4 12 L4 6.5 Z" />
      {/* Heart inside shield */}
      <path d="M12 16 C12 16 8 13 8 10.5 C8 9 9 8 10.5 8.5 C11 8.7 11.5 9 12 9.5 C12.5 9 13 8.7 13.5 8.5 C15 8 16 9 16 10.5 C16 13 12 16 12 16Z" />
    </svg>
  )
}
