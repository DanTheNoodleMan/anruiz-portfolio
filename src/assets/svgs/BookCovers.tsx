// import type { Book } from '../data/content'

function NavyCover() {
  return (
    <svg viewBox="0 0 140 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
      <rect width="140" height="210" fill="#182F45" />
      <rect x="0" y="0" width="7" height="210" fill="#111F2E" />
      <circle cx="70" cy="92" r="54" fill="none" stroke="#3A7AA0" strokeWidth=".75" opacity=".55" />
      <circle cx="70" cy="92" r="40" fill="none" stroke="#3A7AA0" strokeWidth=".5"  opacity=".45" />
      <circle cx="70" cy="92" r="27" fill="none" stroke="#5A9ABA" strokeWidth=".5"  opacity=".38" />
      <circle cx="70" cy="92" r="14" fill="none" stroke="#5A9ABA" strokeWidth=".5"  opacity=".3" />
      <circle cx="70" cy="92" r="4"  fill="#5A9ABA" opacity=".3" />
      <line x1="16" y1="162" x2="124" y2="162" stroke="#3A7AA0" strokeWidth=".5" opacity=".35" />
      <text x="70" y="177" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="8.5" fill="#8ABDD4" opacity=".9">L'Origine des Larmes</text>
      <text x="70" y="192" textAnchor="middle" fontFamily="Georgia,serif" fontSize="7" fill="#4A8AAA" opacity=".75">Jean-Paul Dubois</text>
    </svg>
  )
}

function RoseCover() {
  return (
    <svg viewBox="0 0 140 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
      <rect width="140" height="210" fill="#38181E" />
      <rect x="0" y="0" width="7" height="210" fill="#260E13" />
      <g stroke="#8A3A4A" opacity=".35" strokeWidth=".5">
        <line x1="20" y1="10" x2="20" y2="200" />
        <line x1="32" y1="10" x2="32" y2="200" />
        <line x1="44" y1="10" x2="44" y2="200" />
      </g>
      <rect x="55" y="40" width="72" height="120" fill="#5A2030" opacity=".5" />
      <text
        x="91" y="100"
        textAnchor="middle"
        fontFamily="Georgia,serif"
        fontStyle="italic"
        fontSize="12"
        fill="#C4758A"
        opacity=".8"
        transform="rotate(-90,91,100)"
      >
        A Noite
      </text>
      <line x1="16" y1="165" x2="124" y2="165" stroke="#8A3A4A" strokeWidth=".5" opacity=".35" />
      <text x="70" y="180" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="8"   fill="#C4758A" opacity=".9">A Noite dos Cem Dias</text>
      <text x="70" y="195" textAnchor="middle" fontFamily="Georgia,serif"                  fontSize="7"   fill="#8A3A4A" opacity=".75">Bessa-Luís</text>
    </svg>
  )
}

function AmberCover() {
  return (
    <svg viewBox="0 0 140 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
      <defs>
        <radialGradient id="book-fg" cx="50%" cy="50%" r="60%">
          <stop offset="0%"   stopColor="#D08A28" stopOpacity=".25" />
          <stop offset="100%" stopColor="#281A08" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="140" height="210" fill="#281A08" />
      <rect x="0" y="0" width="7" height="210" fill="#1C1005" />
      <rect width="140" height="210" fill="url(#book-fg)" />
      {/* flames */}
      <ellipse cx="70" cy="98" rx="28" ry="48" fill="#9A5A18" opacity=".28" />
      <ellipse cx="70" cy="82" rx="18" ry="36" fill="#C47C28" opacity=".22" />
      <ellipse cx="70" cy="66" rx="10" ry="24" fill="#E8A848" opacity=".18" />
      {/* sparks */}
      <circle cx="44" cy="58" r="1.2" fill="#D08A28" opacity=".4" />
      <circle cx="98" cy="72" r="1"   fill="#D08A28" opacity=".35" />
      <circle cx="58" cy="42" r=".8"  fill="#E8A848" opacity=".35" />
      <circle cx="88" cy="48" r="1"   fill="#E8A848" opacity=".3" />
      <circle cx="32" cy="100" r=".8" fill="#C47C28" opacity=".25" />
      <line x1="16" y1="162" x2="124" y2="162" stroke="#C47C28" strokeWidth=".5" opacity=".35" />
      <text x="70" y="177" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="8.5" fill="#E8B870" opacity=".9">Archive of Small Fires</text>
      <text x="70" y="192" textAnchor="middle" fontFamily="Georgia,serif" fontSize="7" fill="#C47C28" opacity=".75">Various Authors · Editor</text>
    </svg>
  )
}

function ForestCover() {
  const dotRows = [22, 40, 58, 76, 94, 112, 130]
  const dotCols = [22, 38, 54, 70, 86, 102, 118]
  return (
    <svg viewBox="0 0 140 210" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
      <rect width="140" height="210" fill="#162218" />
      <rect x="0" y="0" width="7" height="210" fill="#0E1810" />
      <g fill="#4A8A58" opacity=".2">
        {dotRows.flatMap((cy) =>
          dotCols.map((cx) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.3" />
          ))
        )}
      </g>
      <rect x="18" y="52" width="104" height="68" fill="#224030" opacity=".6" />
      <text x="70" y="90"  textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill="#7AC890">Cartas desde</text>
      <text x="70" y="104" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="10" fill="#7AC890">el Silencio</text>
      <line x1="16" y1="162" x2="124" y2="162" stroke="#4A8A58" strokeWidth=".5" opacity=".35" />
      <text x="70" y="177" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="8.5" fill="#7AC890" opacity=".9">Cartas desde el Silencio</text>
      <text x="70" y="192" textAnchor="middle" fontFamily="Georgia,serif" fontSize="7" fill="#4A8A58" opacity=".75">Aponte Alsina · Ed. &amp; Tr.</text>
    </svg>
  )
}

// const COVER_MAP: Record<Book['coverVariant'], React.ComponentType> = {
//   navy:   NavyCover,
//   rose:   RoseCover,
//   amber:  AmberCover,
//   forest: ForestCover,
// }

// export function BookCover({ variant }: { variant: Book['coverVariant'] }) {
//   const Cover = COVER_MAP[variant]
//   return <Cover />
// }
