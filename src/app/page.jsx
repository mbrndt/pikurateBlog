import Link from "next/link";
import landingpage from "./assets/landingpage.png";
import Image from "next/image";

export default function HomePage() {
	return (
		<main className="flex flex-col items-center justify-between p-24 text-black font-serif">
			<Image
				src={landingpage}
				alt="landing page"
				width="fill"
				className="z-0"
			/>
			<h1 className="text-3xl">
				Welcome to <span className="text-blue-500">Pikurate!</span>
			</h1>
			<ul>
				<li className="flex flex-col mt-10 gap-5 ">
					<Link
						className="text-2xl uppercase border rounded-xl border-gray-500 p-2 hover:bg-slate-50"
						href="/blog"
					>
						Blog
					</Link>
					<Link
						className="text-2xl uppercase border rounded-xl border-gray-500 p-2 hover:bg-slate-50"
						href="/about"
					>
						About
					</Link>
				</li>
			</ul>
		</main>
	);
}
