"use client";

import Link from "next/link";
import landingpage from "./assets/landingpage.gif";
import landingTitle from "./assets/landingTitle.jpg";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "src/app/firebase.js";

export default function HomePage() {
	const [user, loading] = useAuthState(auth);

	return (
		<main className="flex flex-row flex-wrap md:flex-nowrap items-center">
			<div className="flex m-10 md:ml-20 flex-col">
				<Image src={landingTitle} alt="" />

				<h1 className="text-3xl mt-10">
					{user && (
						<p className="pl-2">
							Hello, {user.displayName}. Welcome to{" "}
							<span className="text-blue-500">Pikurate!</span>{" "}
						</p>
					)}
					{!user && (
						<p className="pl-2">
							Welcome to <span className="text-blue-500">Pikurate!</span>{" "}
						</p>
					)}
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
