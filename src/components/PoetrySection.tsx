import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { poems, type Poem } from "../data/content";

/* =========================================
   POEM MODAL (READING VIEW)
   ========================================= */
function PoemModal({ poem, onClose }: { poem: Poem; onClose: () => void }) {
	// Lock body scroll when modal is open
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.4 }}
			className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#F5EDE3]/90 backdrop-blur-sm"
			onClick={onClose} // Close when clicking the backdrop
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
				className="relative w-full max-w-2xl max-h-full bg-[#FAF7F2] rounded-sm shadow-2xl overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border border-ink/10"
				onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
			>
				{/* Sticky Header / Close Button */}
				<div className="sticky top-0 flex justify-end p-5 md:p-8 pb-0 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2] to-transparent z-10">
					<button
						onClick={onClose}
						className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-medium text-warm-muted hover:text-ink transition-colors group"
					>
						Close
						<span className="p-1.5 rounded-full bg-ink/5 group-hover:bg-ink/10 transition-colors">
							<X className="w-3 h-3" />
						</span>
					</button>
				</div>

				{/* Poem Content */}
				<div className="px-6 pb-16 md:px-16 md:pb-24 pt-4 md:pt-8 text-center md:text-left">
					<span className="text-[11px] tracking-[0.12em] uppercase text-accent mb-4 block">{poem.year}</span>
					<h2 className="font-serif text-[28px] md:text-[36px] italic leading-[1.2] text-ink mb-12">{poem.title}</h2>

					{/* 
						whitespace-pre-wrap ensures your text formatting (line breaks, stanza gaps) 
						from the content.ts file is respected exactly as written 
					*/}
					<div className="font-serif text-[16px] md:text-[18px] leading-[2.2] md:leading-[2.4] text-ink/80 whitespace-pre-wrap">
						{poem.content}
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

/* =========================================
   POETRY CARD (GRID/CAROUSEL ITEM)
   ========================================= */
function PoetryCard({ poem, index, onClick }: { poem: Poem; index: number; onClick: () => void }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
			className="h-full"
		>
			<button onClick={onClick} className="group flex flex-col h-full w-full text-left cursor-pointer">
				{/* Image Container
				<div className="aspect-[3/4] w-full rounded-sm overflow-hidden mb-5 shadow-[4px_5px_16px_rgba(26,23,20,0.14),1px_1px_0_rgba(26,23,20,0.07)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[6px_8px_20px_rgba(26,23,20,0.2)] bg-ink/5">
					<img
						src={poem.image}
						alt={poem.title}
						className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
					/>
				</div> */}

				{/* Text Info */}
				<div className="flex flex-col flex-grow">
					<h3 className="font-serif text-[18px] md:text-[20px] italic leading-[1.3] mb-2 text-ink group-hover:text-accent transition-colors duration-300">
						{poem.title}
					</h3>

					<p className="text-[11px] text-warm-muted uppercase tracking-[0.05em] mb-4">{poem.year}</p>

					{/* Quote excerpt */}
					<blockquote className="mt-auto pt-4 border-t border-ink/10 text-[13px] text-ink/70 italic leading-[1.6] whitespace-pre-line">
						&ldquo;{poem.quote}&rdquo;
					</blockquote>
				</div>
			</button>
		</motion.div>
	);
}

/* =========================================
   MAIN POETRY SECTION
   ========================================= */
export default function PoetrySection() {
	const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);

	return (
		<>
			<section id="poetry" className="px-5 py-14 md:px-12 md:py-20 border-b border-ink/10 overflow-hidden">
				<SectionHeader number="§ 02 — Written for Slam Poetry" title="Latest Favorites" />

				{/* Mobile: Horizontal snap-scroll / Desktop: Wrapping grid */}
				<div className="flex overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
					{poems.map((poem, i) => (
						<div key={poem.id} className="min-w-[260px] max-w-[280px] md:min-w-0 md:max-w-none snap-start shrink-0">
							<PoetryCard poem={poem} index={i} onClick={() => setSelectedPoem(poem)} />
						</div>
					))}
				</div>
			</section>

			{/* Render Modal via AnimatePresence for smooth mounting/unmounting */}
			<AnimatePresence>{selectedPoem && <PoemModal poem={selectedPoem} onClose={() => setSelectedPoem(null)} />}</AnimatePresence>
		</>
	);
}
