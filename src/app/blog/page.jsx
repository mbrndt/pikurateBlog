import Link from "next/link";
import React from "react";

export const metadata = {
	title: "Blog | Pikurate",
};

function page() {
	return (
		<div className="text-black w-screen min-h-screen flex flex-row">
			<div className="w-1/4 h-full " />
			<div className="border-x w-full p-5">
				<h1 className="font-serif text-xl justify-center flex">Blog</h1>
				<p>Coming soon...</p>
			</div>
			<div className="w-1/4 h-full " />
		</div>
	);
}

export default page;
