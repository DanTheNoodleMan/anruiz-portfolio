import SectionHeader from './SectionHeader'

export default function Contact() {
  return (
    <section id="contact" className="px-12 pt-20 pb-12">
      <SectionHeader number="§ 03 — Contact" title="" />

      <div className="flex justify-between items-end py-8">
        <h2 className="font-serif text-[60px] font-light leading-[1.05] italic">
          Let's be<br />in touch
        </h2>

        <div className="flex flex-col items-end gap-[0.85rem]">
          <a
            href="mailto:ani.dvitx18@gmail.com"
            className="text-[14px] text-warm-gray no-underline transition-colors duration-200 hover:text-ink"
          >
            ani.dvitx18@gmail.com
          </a>
          {/* <a
            href="#"
            className="text-[14px] text-warm-gray no-underline transition-colors duration-200 hover:text-ink"
          >
            LinkedIn
          </a> */}
          {/* <a
            href="#"
            className="mt-1 text-[10px] font-medium tracking-[0.14em] uppercase text-accent no-underline pt-[0.85rem] border-t border-ink/[0.16] w-full text-right transition-colors duration-200 hover:text-accent-dim"
          >
            Download CV ↓
          </a> */}
        </div>
      </div>
    </section>
  )
}
