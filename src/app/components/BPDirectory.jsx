import React from "react";
import Link from "next/link";

function BPDirectory() {
	return (
		<div>
			<div className="flex flex-col items-center mt-5 bg-gray-50 rounded-md ">
				<h1 className="item-center text-2xl">Table of Contents</h1>
				<div className="flex flex-col gap-3 m-5 text-xl ">
					<Link
						href="/blog/AllAboutSeoul#section1"
						scroll={false}
						className="capitalize hover:text-blue-500"
					>
						About Seoul
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section2"
						scroll={false}
						className="capitalize hover:text-blue-500"
					>
						To Go
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section3"
						scroll={false}
						className="capitalize hover:text-blue-500"
					>
						To Eat
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section4"
						scroll={false}
						className="capitalize hover:text-blue-500"
					>
						Chicken and Beer
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section5"
						scroll={false}
						className="capitalize hover:text-blue-500"
					>
						Unique Spots
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section6"
						scroll={false}
						className="capitalize hover:text-blue-500"
					>
						Night Clubs
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section7"
						scroll={false}
						className="capitalize hover:text-blue-500"
					>
						Night Culture
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section8"
						scroll={false}
						className="capitalize hover:text-blue-500"
					>
						Subway Tour
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section9"
						scroll={false}
						className="capitalize hover:text-blue-500"
					>
						Art Spot
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section10"
						scroll={false}
						className="capitalize hover:text-blue-500"
					>
						Exhibition
					</Link>
				</div>
			</div>
		</div>
	);
}

export default BPDirectory;
