/** Wide landscape — sweeping motion arcs */
export function WideMotionCell() {
  return (
    <svg
      viewBox="0 0 480 240"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full block"
    >
      <defs>
        <radialGradient id="pm1-g" cx="38%" cy="55%" r="55%">
          <stop offset="0%"   stopColor="#7A3818" stopOpacity=".6" />
          <stop offset="100%" stopColor="#181210" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pm1-v" cx="50%" cy="50%" r="75%">
          <stop offset="60%"  stopColor="#181210" stopOpacity="0" />
          <stop offset="100%" stopColor="#080604" stopOpacity=".75" />
        </radialGradient>
      </defs>
      <rect width="480" height="240" fill="#181210" />
      <rect width="480" height="240" fill="url(#pm1-g)" />
      {/* motion arcs */}
      <path d="M60,200 Q140,60 240,120 Q340,180 420,50"  fill="none" stroke="#C47040" strokeWidth="1.5" opacity=".45" />
      <path d="M60,210 Q150,75 255,130 Q355,185 430,55"  fill="none" stroke="#E8A060" strokeWidth=".75" opacity=".22" />
      <path d="M40,195 Q130,80 220,115 Q320,150 410,45"  fill="none" stroke="#E8A060" strokeWidth=".5"  opacity=".14" />
      {/* figure mass */}
      <ellipse cx="200" cy="130" rx="55" ry="80" fill="#8A4020" opacity=".15" />
      <ellipse cx="200" cy="110" rx="28" ry="42" fill="#C47040" opacity=".1" />
      <rect width="480" height="240" fill="url(#pm1-v)" />
    </svg>
  )
}

/** Tall portrait — figure in stillness */
export function TallStillCell() {
  return (
    <svg
      viewBox="0 0 180 300"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full block"
    >
      <defs>
        <radialGradient id="ps2-g" cx="50%" cy="38%" r="50%">
          <stop offset="0%"   stopColor="#8A4A1E" stopOpacity=".55" />
          <stop offset="100%" stopColor="#1C1510" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ps2-v" cx="50%" cy="50%" r="65%">
          <stop offset="60%"  stopColor="#1C1510" stopOpacity="0" />
          <stop offset="100%" stopColor="#0A0806" stopOpacity=".7" />
        </radialGradient>
      </defs>
      <rect width="180" height="300" fill="#1C1510" />
      <rect width="180" height="300" fill="url(#ps2-g)" />
      <ellipse cx="90" cy="98"  rx="42" ry="52" fill="#A05A28" opacity=".22" />
      <ellipse cx="90" cy="92"  rx="30" ry="38" fill="#C4783A" opacity=".18" />
      <ellipse cx="90" cy="220" rx="65" ry="90" fill="#5A2E14" opacity=".22" />
      <line x1="90" y1="8" x2="90" y2="292" stroke="#C07040" strokeWidth=".4" opacity=".18" />
      <ellipse cx="90" cy="90" rx="32" ry="40" fill="none" stroke="#D49870" strokeWidth=".65" opacity=".3" />
      {/* hair */}
      <ellipse cx="90" cy="58" rx="48" ry="32" fill="#120C08" opacity=".75" />
      <rect width="180" height="300" fill="url(#ps2-v)" />
    </svg>
  )
}

/** Tall portrait — resonance/ripple study */
export function TallResonanceCell() {
  return (
    <svg
      viewBox="0 0 180 300"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full block"
    >
      <defs>
        <radialGradient id="pr3-v" cx="50%" cy="50%" r="65%">
          <stop offset="65%"  stopColor="#1A1918" stopOpacity="0" />
          <stop offset="100%" stopColor="#0A0908" stopOpacity=".65" />
        </radialGradient>
      </defs>
      <rect width="180" height="300" fill="#1A1918" />
      {/* concentric resonance ellipses */}
      <ellipse cx="90" cy="150" rx="75" ry="110" fill="none" stroke="#5A5450" strokeWidth=".65" opacity=".35" />
      <ellipse cx="90" cy="150" rx="58" ry="86"  fill="none" stroke="#5A5450" strokeWidth=".5"  opacity=".28" />
      <ellipse cx="90" cy="150" rx="40" ry="60"  fill="none" stroke="#6A6460" strokeWidth=".5"  opacity=".22" />
      <ellipse cx="90" cy="150" rx="24" ry="36"  fill="none" stroke="#7A7470" strokeWidth=".5"  opacity=".18" />
      <ellipse cx="90" cy="150" rx="10" ry="15"  fill="#5A5450" opacity=".35" />
      <ellipse cx="90" cy="140" rx="6"  ry="8"   fill="#C09060" opacity=".18" />
      <rect width="180" height="300" fill="url(#pr3-v)" />
    </svg>
  )
}

/** Wide landscape — stage light, theatrical */
export function WideStageCell() {
  return (
    <svg
      viewBox="0 0 480 210"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full block"
    >
      <defs>
        <radialGradient id="ps4-sl" cx="50%" cy="0%" r="80%">
          <stop offset="0%"   stopColor="#E8B060" stopOpacity=".22" />
          <stop offset="100%" stopColor="#12100E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ps4-v" cx="50%" cy="50%" r="70%">
          <stop offset="60%"  stopColor="#12100E" stopOpacity="0" />
          <stop offset="100%" stopColor="#060504" stopOpacity=".75" />
        </radialGradient>
      </defs>
      <rect width="480" height="210" fill="#12100E" />
      <rect width="480" height="210" fill="url(#ps4-sl)" />
      {/* stage floor glow */}
      <ellipse cx="240" cy="185" rx="100" ry="25" fill="#8A5018" opacity=".2" />
      {/* curtain / leg lines */}
      <line x1="80"  y1="0" x2="80"  y2="210" stroke="#3A2A18" strokeWidth=".5" opacity=".45" />
      <line x1="120" y1="0" x2="120" y2="210" stroke="#3A2A18" strokeWidth=".3" opacity=".3" />
      <line x1="360" y1="0" x2="360" y2="210" stroke="#3A2A18" strokeWidth=".5" opacity=".45" />
      <line x1="400" y1="0" x2="400" y2="210" stroke="#3A2A18" strokeWidth=".3" opacity=".3" />
      {/* centre-stage figure silhouette */}
      <ellipse cx="240" cy="140" rx="18" ry="46" fill="#5A3010" opacity=".35" />
      <ellipse cx="240" cy="108" rx="12" ry="16" fill="#7A4820" opacity=".3" />
      <rect width="480" height="210" fill="url(#ps4-v)" />
    </svg>
  )
}
