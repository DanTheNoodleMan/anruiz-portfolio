import AnimateIn from "./AnimateIn";

interface SectionHeaderProps {
	number: string;
	title: string;
}

export default function SectionHeader({ number, title }: SectionHeaderProps) {
	return (
		<AnimateIn>
			<div className="flex items-center gap-3 mb-[0.6rem]">
				<span className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent">{number}</span>
				<div className="w-9 h-px bg-ink/[0.16] flex-none" />
			</div>
			{title && <h2 className="font-serif text-[28px] md:text-[38px] font-normal mb-10 md:mb-12">{title}</h2>}
		</AnimateIn>
	);
}
