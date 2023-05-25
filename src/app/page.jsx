import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex flex-col items-center justify-between p-24 text-black font-serif">
			<h1>Welcome to Pikurate</h1>
			<ul>
				<li className="flex flex-col">
					<Link href="/">Home</Link>
					<Link href="/blog">Blog</Link>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</main>
	);
}
