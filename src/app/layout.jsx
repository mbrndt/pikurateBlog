import "./globals.css";
import { inter, montserrat } from "./fonts";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata = {
	title: "Pikurate Blog - More Than Just A Link",
	description:
		"Pikurate is a tailored knowledge curation platform, powered by AI and our community",
	keywords: "pikurate, knowlege curation , AI",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
			<body className="text-black">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
