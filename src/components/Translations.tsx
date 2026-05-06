import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
// import { BookCover } from "../assets/svgs/BookCovers";
import { books, type Book } from "../data/content";

function BookCard({ book, index }: { book: Book; index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
			className="h-full"
		>
			<a href={book.url || "#"} target="_blank" rel="noopener noreferrer" className="group flex flex-col h-full cursor-pointer">
				{/* Cover with subtle lift and shadow expansion on hover */}
				<div className="aspect-[2/3] rounded-sm overflow-hidden mb-5 shadow-[4px_5px_16px_rgba(26,23,20,0.14),1px_1px_0_rgba(26,23,20,0.07)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[6px_8px_20px_rgba(26,23,20,0.2)]">
					{/* <BookCover variant={book.coverVariant} /> */}
				</div>

				{/* Info wrapper: using flex-grow to push quotes to the bottom evenly if titles vary in height */}
				<div className="flex flex-col flex-grow">
					<h3 className="font-serif text-[18px] md:text-[20px] italic leading-[1.3] mb-1 text-ink group-hover:text-accent transition-colors duration-300">
						{book.title}
					</h3>
					<p className="text-[13px] text-warm-muted mb-3">by {book.author}</p>

					{/* Tags & Metadata */}
					<div className="flex items-center gap-2 flex-wrap mb-2">
						{/* Template-inspired pill tag but matching your aesthetic */}
						<span className="text-[10px] font-medium text-accent bg-accent/5 px-2 py-1 rounded-[3px] uppercase tracking-[0.09em]">
							{book.role}
						</span>
					</div>

					<p className="text-[11px] text-warm-muted uppercase tracking-[0.05em] mb-5">
						{book.publisher} {book.publisher && book.year ? "—" : ""} {book.year}
					</p>

					{/* Quote - aligned to bottom via mt-auto */}
					{book.quote && (
						<blockquote className="mt-auto pt-4 border-t border-ink/10 text-[13px] text-ink/70 italic leading-[1.6]">
							&ldquo;{book.quote}&rdquo;
						</blockquote>
					)}
				</div>
			</a>
		</motion.div>
	);
}

export default function Translations() {
	return (
		// Adjusted mobile padding to match a responsive layout (px-5 on mobile, px-12 on desktop)
		<section id="translations" className="px-5 py-14 md:px-12 md:py-20 border-b border-ink/10 overflow-hidden">
			<SectionHeader number="§ 03 — Translations & Editions" title="Books & Editions" />

			{/* 
				Mobile: Horizontal snap-scroll carousel (hide-scrollbar classes applied)
				Desktop: Standard wrapping grid (if >4 items, it drops cleanly to row 2)
			*/}
			<div className="flex overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
				{books.map((book, i) => (
					<div key={book.id} className="min-w-[260px] max-w-[280px] md:min-w-0 md:max-w-none snap-start shrink-0">
						<BookCard book={book} index={i} />
					</div>
				))}
			</div>
		</section>
	);
}
