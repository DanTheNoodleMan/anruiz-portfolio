import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Writing from "./components/Writing";
import PoetrySection from "./components/PoetrySection";
import Translations from "./components/Translations";
import Performance from "./components/Performance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
	return (
		<div className="bg-cream text-ink font-sans  mx-auto">
			<Nav />
			<Hero />
			{/* <About /> */}
			<Writing />
			<PoetrySection />
			{/* <Translations /> */}
			{/* <Performance /> */}
			<Contact />
			<Footer />
		</div>
	);
}
