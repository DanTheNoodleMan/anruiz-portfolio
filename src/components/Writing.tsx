import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { essays, type Essay } from "../data/content";

function EssayRow({ essay, index }: { essay: Essay; index: number }) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 14 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
			// Replaced padding shift with the template's 'group' for cohesive color/opacity hovers
			className="group py-6 md:py-8 border-b border-ink/10 first:border-t first:border-t-ink/10 first:border-t-0 last:border-b-0 transition-colors duration-500 cursor-pointer"
		>
			{/* Wrapped in an anchor tag to make the whole row clickable */}
			<a href={essay.url || "#"} target="_blank" rel="noopener noreferrer" className="block">
				{/* Mobile layout */}
				<div className="md:hidden flex flex-col gap-2">
					<div className="flex justify-between items-baseline mb-1">
						<span className="text-[10px] font-medium tracking-[0.12em] uppercase text-accent">{essay.format}</span>
						{/* <span className="text-[11px] text-warm-muted">{essay.year}</span> */}
					</div>
					<div>
						<h3 className="font-serif text-[22px] italic leading-[1.2] mb-2 text-ink group-hover:text-accent transition-colors duration-300">
							{essay.title}
						</h3>
						<p className="text-[13px] text-warm-muted leading-[1.6] group-hover:text-ink transition-colors duration-300">
							{essay.description}
						</p>
					</div>
					{/* Mobile hover read link */}
					<div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<span className="text-[11px] font-medium uppercase tracking-[0.1em] text-accent">Read</span>
						<ArrowRight className="w-3 h-3 text-accent" />
					</div>
				</div>

				{/* Desktop layout */}
				{/* Using items-baseline ensures the publication, year, and the first line of the title all align perfectly */}
				<div className="hidden md:grid md:grid-cols-[130px_1fr_auto] md:items-baseline md:gap-x-8">
					<span className="text-[10px] font-medium tracking-[0.12em] uppercase text-accent">{essay.format}</span>

					<div className="flex flex-col">
						{/* Template-inspired Title */}
						<h3 className="font-serif text-[20px] italic leading-[1.2] mb-3 text-ink group-hover:text-accent transition-colors duration-300">
							{essay.title}
						</h3>

						{/* Template-inspired Description */}
						<p className="text-[14px] text-warm-muted leading-[1.6] max-w-2xl group-hover:text-ink transition-colors duration-300">
							{essay.description}
						</p>

						{/* Template-inspired Hover Action */}
						<div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<span className="text-[11px] font-medium uppercase tracking-[0.1em] text-accent">Read Piece</span>
							<ArrowRight className="w-3.5 h-3.5 text-accent" />
						</div>
					</div>

					{/* <span className="text-[12px] text-warm-muted whitespace-nowrap">{essay.year}</span> */}
				</div>
			</a>
		</motion.article>
	);
}

export default function Writing() {
	return (
		<section id="writing" className="px-5 py-14 md:px-12 md:py-20 border-b border-ink/10">
			<SectionHeader number="§ 01 — Writing" title="Essays & Articles" />

			<div className="flex flex-col">
				{essays.map((essay, i) => (
					<EssayRow key={essay.title} essay={essay} index={i} />
				))}
			</div>

			{/* Template's "View Full Bibliography" link adapted to your color scheme
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="mt-14 text-center md:text-right"
			>
				<a
					href="#"
					className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.12em] uppercase text-accent hover:text-ink transition-colors"
				>
					View Full Bibliography
					<ExternalLink className="w-3.5 h-3.5" />
				</a>
			</motion.div> */}
		</section>
	);
}
