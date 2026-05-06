import { motion } from "framer-motion";

function HeroPortrait() {
	return (
		<svg viewBox="0 0 360 450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
			<defs>
				<radialGradient id="hero-hg1" cx="50%" cy="40%" r="60%">
					<stop offset="0%" stopColor="#7A3B18" stopOpacity=".55" />
					<stop offset="100%" stopColor="#241C15" stopOpacity="0" />
				</radialGradient>
				<radialGradient id="hero-hg2" cx="40%" cy="75%" r="45%">
					<stop offset="0%" stopColor="#5A2A10" stopOpacity=".4" />
					<stop offset="100%" stopColor="#241C15" stopOpacity="0" />
				</radialGradient>
				<radialGradient id="hero-vig" cx="50%" cy="50%" r="70%">
					<stop offset="60%" stopColor="#241C15" stopOpacity="0" />
					<stop offset="100%" stopColor="#0E0B08" stopOpacity=".7" />
				</radialGradient>
			</defs>
			<rect width="360" height="450" fill="#241C15" />
			<rect width="360" height="450" fill="url(#hero-hg1)" />
			<rect width="360" height="450" fill="url(#hero-hg2)" />
			<ellipse cx="180" cy="158" rx="68" ry="80" fill="#A85A28" opacity=".18" />
			<ellipse cx="180" cy="152" rx="52" ry="62" fill="#C47840" opacity=".15" />
			<ellipse cx="180" cy="310" rx="110" ry="130" fill="#7A3B18" opacity=".18" />
			<path d="M135,190 Q180,215 225,190" fill="none" stroke="#D4956A" strokeWidth=".75" opacity=".25" />
			<ellipse cx="180" cy="95" rx="78" ry="50" fill="#3A1E0E" opacity=".6" />
			<ellipse cx="172" cy="138" rx="5" ry="6" fill="#F0C890" opacity=".2" />
			<ellipse cx="186" cy="137" rx="4" ry="5" fill="#F0C890" opacity=".15" />
			<rect x="0" y="120" width="360" height="60" fill="#C47840" opacity=".04" />
			<rect width="360" height="450" fill="url(#hero-vig)" />
			<text
				x="180"
				y="437"
				textAnchor="middle"
				fontFamily="Georgia,serif"
				fontStyle="italic"
				fontSize="9"
				fill="#7A5A45"
				letterSpacing="3"
			>
				photograph
			</text>
		</svg>
	);
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 items-end min-h-[70vh] md:min-h-[88vh] px-5 pt-12 pb-10 md:px-12 md:pt-20 md:pb-16 border-b border-ink/10 gap-10 md:gap-8">
			{/* Left — text */}
			<div className="flex flex-col justify-end">
				<motion.p
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease, delay: 0.05 }}
					className="text-[11px] tracking-[0.18em] uppercase text-accent mb-6"
				>
					Writer · Translator · Artist
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease, delay: 0.15 }}
					className="font-serif text-[64px] sm:text-[80px] md:text-[96px] font-light leading-[0.92] tracking-[-0.01em] mb-10"
				>
					Ana
					<em className="block">Ruiz</em>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease, delay: 0.35 }}
					className="text-[15px] text-warm-gray max-w-[360px] leading-[1.9] pl-5 border-l-[1.5px] border-accent"
				>
					{" Welcome to the inner workings of my mind. I look forward to seeing yours ;)"}
				</motion.p>
			</div>

			{/* Right — portrait */}
			<motion.div
				initial={{ opacity: 0, scale: 0.98 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.9, ease, delay: 0.2 }}
				className="flex justify-center md:justify-end md:items-end"
			>
				<div className="rounded-sm overflow-hidden">
					<img
						src="/anruiz_hero.webp"
						alt="Portrait of Ana Ruiz"
						className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] brightness-[0.95]"
					/>
				</div>
			</motion.div>
		</div>
	);
}
