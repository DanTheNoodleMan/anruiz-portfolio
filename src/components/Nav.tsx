import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
	// { label: "About", href: "#about" },
	{ label: "Writing", href: "#writing" },
	{ label: "Poetry", href: "#poetry" },
	// { label: "Translations", href: "#translations" },
	// { label: "Performance", href: "#performance" },
	{ label: "Contact", href: "#contact" },
];

function HamburgerIcon({ open }: { open: boolean }) {
	return (
		<button
			aria-label="Toggle menu"
			className="flex flex-col justify-center gap-[5px] w-6 h-6 md:hidden cursor-pointer bg-transparent border-0 p-0"
		>
			<motion.span
				animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
				transition={{ duration: 0.22 }}
				className="block h-px bg-ink origin-center"
			/>
			<motion.span
				animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
				transition={{ duration: 0.18 }}
				className="block h-px bg-ink origin-center"
			/>
			<motion.span
				animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
				transition={{ duration: 0.22 }}
				className="block h-px bg-ink origin-center"
			/>
		</button>
	);
}

export default function Nav() {
	const [open, setOpen] = useState(false);
	const close = () => setOpen(false);

	return (
		<>
			<nav className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 md:px-12 md:py-5 bg-cream border-b border-ink/10 backdrop-blur">
				<span className="font-serif text-[18px] tracking-[0.02em]">Ana Ruiz</span>

				{/* Desktop links */}
				<ul className="hidden md:flex gap-10 list-none">
					{NAV_LINKS.map(({ label, href }) => (
						<li key={href}>
							<a
								href={href}
								className="text-[11px] text-warm-gray tracking-[0.12em] uppercase no-underline transition-colors duration-200 hover:text-ink"
							>
								{label}
							</a>
						</li>
					))}
				</ul>

				{/* Mobile hamburger */}
				<div onClick={() => setOpen((o) => !o)}>
					<HamburgerIcon open={open} />
				</div>
			</nav>

			{/* Mobile full-screen overlay */}
			<AnimatePresence>
				{open && (
					<motion.div
						key="mobile-menu"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-2 md:hidden"
					>
						{NAV_LINKS.map(({ label, href }, i) => (
							<motion.a
								key={href}
								href={href}
								initial={{ opacity: 0, y: 14 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.055 + 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
								onClick={close}
								className="font-serif text-[36px] font-light italic py-2 text-ink no-underline hover:text-accent transition-colors duration-150"
							>
								{label}
							</motion.a>
						))}
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.42 }}
							className="absolute bottom-8 text-[10px] tracking-[0.16em] uppercase text-warm-muted"
						>
							Ana Ruiz — 2026
						</motion.p>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
