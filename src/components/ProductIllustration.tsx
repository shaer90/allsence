export function ProductIllustration({ id, color }: { id: string; color: string }) {
  const c2 = color + 'aa';
  const c3 = color + '44';

  if (id === 'daily-pads') return (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={`b1-${id}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor={color} /><stop offset="1" stopColor={c2} /></linearGradient>
        <linearGradient id={`b1s-${id}`} x1="0" y1="0" x2="1" y2="0"><stop stopColor={c2} /><stop offset="1" stopColor="#1a001044" /></linearGradient>
      </defs>
      <rect x="50" y="60" width="160" height="200" rx="16" fill={`url(#b1-${id})`} />
      <path d="M210 60 L240 90 L240 290 L210 260 Z" fill={c2} opacity="0.6" />
      <path d="M50 60 L80 30 L240 30 L210 60 Z" fill={color} opacity="0.8" />
      <rect x="70" y="90" width="120" height="38" rx="8" fill="white" opacity="0.12" />
      <text x="130" y="115" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Cairo">allsence</text>
      <circle cx="130" cy="175" r="35" fill="white" opacity="0.06" />
      <circle cx="130" cy="155" r="8" fill="white" opacity="0.18" />
      <circle cx="150" cy="170" r="8" fill="white" opacity="0.18" />
      <circle cx="145" cy="193" r="8" fill="white" opacity="0.18" />
      <circle cx="115" cy="193" r="8" fill="white" opacity="0.18" />
      <circle cx="110" cy="170" r="8" fill="white" opacity="0.18" />
      <circle cx="100" cy="228" r="22" fill="white" opacity="0.18" />
      <text x="100" y="234" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">60</text>
      <ellipse cx="135" cy="315" rx="70" ry="12" fill={c3} />
    </svg>
  );

  if (id === 'ultra-night') return (
    <svg viewBox="0 0 280 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={`b2-${id}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor={color} /><stop offset="1" stopColor={c2} /></linearGradient>
      </defs>
      <path d="M40 80 Q40 60 60 55 L220 55 Q240 60 240 80 L240 230 Q240 250 220 255 L60 255 Q40 250 40 230 Z" fill={`url(#b2-${id})`} />
      <path d="M60 55 L90 55 L70 90 L40 90 Z" fill="white" opacity="0.1" />
      <text x="140" y="100" textAnchor="middle" fill="white" fontSize="15" fontWeight="900" fontFamily="Cairo">allsence</text>
      <text x="140" y="124" textAnchor="middle" fill="white" fontSize="11" opacity="0.7" fontFamily="Cairo">ultra night</text>
      <path d="M80 145 Q140 125 200 145 L195 200 Q140 215 85 200 Z" fill="white" opacity="0.14" />
      <path d="M90 155 Q140 138 190 155 L186 195 Q140 207 94 195 Z" fill="white" opacity="0.2" />
      <text x="140" y="238" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">7 pads</text>
      <ellipse cx="140" cy="290" rx="65" ry="10" fill={c3} />
    </svg>
  );

  if (id === 'plus') return (
    <svg viewBox="0 0 280 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={`b3-${id}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor={color} /><stop offset="1" stopColor={c2} /></linearGradient>
      </defs>
      <path d="M35 85 Q35 60 60 55 L220 55 Q245 60 245 85 L245 225 Q245 250 220 255 L60 255 Q35 250 35 225 Z" fill={`url(#b3-${id})`} />
      <path d="M55 55 L90 55 L65 95 L30 95 Z" fill="white" opacity="0.1" />
      <text x="140" y="98" textAnchor="middle" fill="white" fontSize="15" fontWeight="900" fontFamily="Cairo">allsence</text>
      <text x="140" y="122" textAnchor="middle" fill="white" fontSize="20" fontWeight="900" fontFamily="Cairo">plus</text>
      <path d="M60 150 Q100 130 140 150 Q180 170 220 150" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M60 170 Q100 150 140 170 Q180 190 220 170" stroke="white" strokeWidth="2" fill="none" opacity="0.2" />
      <path d="M75 160 Q140 140 205 160 L200 205 Q140 220 80 205 Z" fill="white" opacity="0.12" />
      <text x="140" y="238" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">8 pads</text>
      <ellipse cx="140" cy="288" rx="65" ry="10" fill={c3} />
    </svg>
  );

  if (id === 'premium-xxl') return (
    <svg viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={`b4a-${id}`} x1="0" y1="0" x2="0" y2="1"><stop stopColor={color} /><stop offset="0.5" stopColor="#9c1f00" /><stop offset="1" stopColor="#c2185b" /></linearGradient>
        <linearGradient id={`b4b-${id}`} x1="0" y1="0" x2="1" y2="0"><stop stopColor={c2} /><stop offset="1" stopColor="#1a0800" /></linearGradient>
      </defs>
      <rect x="45" y="55" width="165" height="220" rx="12" fill={`url(#b4a-${id})`} />
      <path d="M210 55 L255 85 L255 295 L210 275 Z" fill={`url(#b4b-${id})`} />
      <path d="M45 55 L90 25 L255 25 L210 55 Z" fill={color} opacity="0.85" />
      <text x="127" y="105" textAnchor="middle" fill="white" fontSize="12" fontFamily="Cairo">allsence</text>
      <text x="127" y="138" textAnchor="middle" fill="white" fontSize="20" fontWeight="900" fontFamily="Cairo">PReMIUM</text>
      <text x="127" y="162" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold" opacity="0.9">XXL</text>
      <circle cx="127" cy="200" r="18" fill="white" opacity="0.14" />
      <path d="M109 225 Q127 215 145 225 L148 255 L106 255 Z" fill="white" opacity="0.1" />
      <circle cx="175" cy="235" r="20" fill="white" opacity="0.18" />
      <text x="175" y="240" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">7</text>
      <ellipse cx="130" cy="330" rx="75" ry="12" fill={c3} />
    </svg>
  );

  return (
    <svg viewBox="0 0 280 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={`b5-${id}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor={color} /><stop offset="0.5" stopColor="#ad1457" /><stop offset="1" stopColor="#880e4f" /></linearGradient>
      </defs>
      <path d="M55 100 Q50 70 80 60 L200 60 Q230 70 225 100 L230 240 Q230 265 200 268 L80 268 Q50 265 50 240 Z" fill={`url(#b5-${id})`} />
      <rect x="115" y="45" width="50" height="22" rx="11" fill="white" opacity="0.14" />
      <path d="M78 62 L110 62 L90 100 L58 100 Z" fill="white" opacity="0.1" />
      <circle cx="140" cy="140" r="40" fill="white" opacity="0.05" />
      <path d="M120 120 Q140 100 160 120 Q180 140 160 160 Q140 180 120 160 Q100 140 120 120Z" fill="white" opacity="0.1" />
      <text x="140" y="108" textAnchor="middle" fill="white" fontSize="12" fontFamily="Cairo">allsence</text>
      <text x="140" y="132" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" fontFamily="Cairo">PReMIUM</text>
      <text x="140" y="155" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" opacity="0.8">PANTS</text>
      <text x="140" y="245" textAnchor="middle" fill="white" fontSize="13" opacity="0.7">3 pants</text>
      <ellipse cx="140" cy="290" rx="65" ry="10" fill={c3} />
    </svg>
  );
}
