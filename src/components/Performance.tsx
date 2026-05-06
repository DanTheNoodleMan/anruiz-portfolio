import SectionHeader from './SectionHeader'
import {
  WideMotionCell,
  TallStillCell,
  TallResonanceCell,
  WideStageCell,
} from '../assets/svgs/PerformanceCells'

interface PerfCellProps {
  caption: string
  children: React.ReactNode
  className?: string
}

function PerfCell({ caption, children, className = '' }: PerfCellProps) {
  return (
    <div className={`rounded-sm overflow-hidden relative ${className}`}>
      {children}
      <span className="absolute bottom-[0.65rem] left-3 text-[10px] text-white/45 tracking-[0.06em] italic pointer-events-none">
        {caption}
      </span>
    </div>
  )
}

export default function Performance() {
  return (
    <section id="performance" className="px-12 py-20 border-b border-ink/10">
      <SectionHeader number="§ 04 — Performance" title="Movement & Presence" />

      <p className="text-[15px] text-warm-gray max-w-[520px] leading-[1.9] mb-10">
        A parallel practice in contemporary dance and editorial work — exploring
        rhythm, composition, and the body as a site of meaning. Selected
        collaborations, 2020–2024.
      </p>

      <div className="grid grid-cols-3 gap-[6px]">
        {/* Row 1: wide (col-span 2) + tall */}
        <PerfCell
          caption="Contemporary dance performance, Barcelona 2024"
          className="col-span-2 aspect-[16/8]"
        >
          <WideMotionCell />
        </PerfCell>

        <PerfCell caption="Editorial shoot, 2023" className="aspect-[3/5]">
          <TallStillCell />
        </PerfCell>

        {/* Row 2: tall + wide (col-span 2) */}
        <PerfCell caption="Movement study, 2023" className="aspect-[3/5]">
          <TallResonanceCell />
        </PerfCell>

        <PerfCell
          caption="Sala Beckett, Barcelona 2022"
          className="col-span-2 aspect-[16/7]"
        >
          <WideStageCell />
        </PerfCell>
      </div>
    </section>
  )
}
