import SectionHeader from "./SectionHeader";
import AnimateIn from "./AnimateIn";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { credentials } from "../data/content";

export default function About() {
	return (
		<section id="about" className="px-5 py-16 md:px-12 md:py-28 border-b border-ink/10">
			<SectionHeader number="§ 01 — About" title="A little about me" />

			{/* Main Bio Grid */}
			<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2.5fr] gap-12 md:gap-16 lg:gap-24 items-start">
				{/* Left Column: The Pull Quote */}
				{/* On desktop, sticky keeps it visible as you scroll down the longer text on the right */}
				<AnimateIn className="md:sticky md:top-32">
					<blockquote className="border-l border-accent pl-5 lg:pl-6 py-1 text-[22px] md:text-[26px] lg:text-[28px] text-ink italic font-serif leading-[1.3] opacity-90">
						&ldquo;Translation is not about words—it&apos;s about the spaces between them.&rdquo;
					</blockquote>
				</AnimateIn>

				{/* Right Column: The Text */}
				<AnimateIn delay={0.1} className="max-w-3xl">
					<p className="font-serif text-[20px] md:text-[22px] italic leading-[1.6] text-ink mb-8">
						I live between languages — drawn to the edges of things, to what cannot quite be said in one tongue alone.
					</p>

					{/* Space-y-6 adds breathing room between paragraphs automatically */}
					<div className="space-y-6 text-[15px] md:text-[16px] leading-[1.9] text-warm-gray">
						<p>
							Born in São Paulo to a Brazilian mother and Argentine father, I grew up navigating three languages before I
							understood what it meant to choose one. This early experience of linguistic multiplicity shapes everything I
							create—whether I&apos;m writing essays about the untranslatable, translating luminous prose, or developing
							movement pieces that explore what the body knows but cannot say.
						</p>
						<p>
							My essays move through cultural identity, translation theory, and the way bodies hold memory across time and
							displacement. I&apos;ve written for literary journals across Europe and Latin America, in Spanish, English, and
							French.
						</p>
						<p>
							My translation work bridges French and Portuguese into Spanish and English, with a focus on contemporary
							literary fiction and critical essays. I also work as a book editor, collaborating closely with authors on voice,
							structure, and form.
						</p>
						<p>
							In parallel, I maintain a practice in movement and visual work: contemporary dance and modeling as a way of
							thinking through the body what the page cannot always hold.
						</p>
					</div>
				</AnimateIn>
			</div>

			{/* Credentials Grid Footer */}
			{/* mt-24 gives a massive, elegant breath of white space before the footer data */}
			<div className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-ink/10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
				{/* Education */}
				<AnimateIn delay={0.2}>
					<div className="flex items-center gap-2.5 mb-6">
						<GraduationCap className="w-4 h-4 text-accent" />
						<h3 className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent">Education</h3>
					</div>
					<ul className="space-y-5">
						{credentials.education.map((edu, i) => (
							<li key={i}>
								<p className="text-[14px] text-ink font-medium mb-0.5">{edu.degree}</p>
								<p className="text-[13px] text-warm-muted">
									{edu.school}, {edu.year}
								</p>
							</li>
						))}
					</ul>
				</AnimateIn>

				{/* Residencies */}
				{/* <AnimateIn delay={0.3}>
					<div className="flex items-center gap-2.5 mb-6">
						<MapPin className="w-4 h-4 text-accent" />
						<h3 className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent">Residencies</h3>
					</div>
					<ul className="space-y-4">
						{credentials.residencies.map((res, i) => (
							<li
								key={i}
								className="text-[14px] text-warm-gray flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-ink/5 pb-3 last:border-0 last:pb-0"
							>
								<span>{res.name}</span>
								<span className="text-[12px] text-warm-muted mt-1 md:mt-0">{res.year}</span>
							</li>
						))}
					</ul>
				</AnimateIn> */}

				{/* Recognition */}
				<AnimateIn delay={0.4}>
					<div className="flex items-center gap-2.5 mb-6">
						<Award className="w-4 h-4 text-accent" />
						<h3 className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent">Recognition</h3>
					</div>
					<ul className="space-y-4">
						{credentials.awards.map((award, i) => (
							<li
								key={i}
								className="text-[14px] text-warm-gray flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-ink/5 pb-3 last:border-0 last:pb-0"
							>
								<span>{award.name}</span>
								<span className="text-[12px] text-warm-muted mt-1 md:mt-0">{award.year}</span>
							</li>
						))}
					</ul>
				</AnimateIn>
			</div>
		</section>
	);
}
