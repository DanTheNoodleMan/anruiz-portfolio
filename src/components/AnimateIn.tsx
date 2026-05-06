import { motion, type HTMLMotionProps } from "framer-motion";

interface AnimateInProps extends HTMLMotionProps<"div"> {
	delay?: number;
	y?: number;
}

/**
 * Thin wrapper that fades + lifts its children in when they enter the viewport.
 * Pass className/style to control layout — it replaces the wrapper div.
 */
export default function AnimateIn({ delay = 0, y = 16, children, ...props }: AnimateInProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
			{...props}
		>
			{children}
		</motion.div>
	);
}
