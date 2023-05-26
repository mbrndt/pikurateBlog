import Link from "next/link";
import landingpage from "./assets/landingpage.gif";
import landingTitle from "./assets/landingTitle.jpg";
import Image from "next/image";

export default function HomePage() {
	return (
		<main className="flex flex-row items-center">
			<div className="flex ml-20 flex-col">
				<Image src={landingTitle} alt="" />
				<h1 className="text-3xl mt-10">
					Welcome to <span className="text-blue-500">Pikurate!</span>
				</h1>
				<ul>
					<li className="flex flex-col mt-5 gap-5 ">
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
			</div>
			<div className="">
				<Image src={landingpage} alt="landing page" />
			</div>
		</main>
	);
}
