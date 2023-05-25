import Link from "next/link";
import Image from "next/image";
import React from "react";
import study from "../assets/study.jpg";

export const metadata = {
	title: "Blog | Pikurate",
};

function page() {
	return (
		<div className="text-black w-screen min-h-screen flex flex-row">
			<div className="w-1/4 h-full " />
			<div className="border-x w-full p-5">
				<h1 className="font-serif text-xl justify-center flex">Blog</h1>
				<div className="mt-10">
					<div className="w-fit h-fit border rounded-md flex flex-row flex-wrap justify-center">
						<Image
							className="h-fit w-fit mt-5 rounded"
							src={study}
							width={150}
							height={150}
							alt=""
						/>
						<div className="flex flex-col pb-5 items-center">
							<Link className="pl-5 mt-5 text-xl" href="/blog/englishStudy">
								English Study Materials
							</Link>
							<p className="m-5 pt-5">
								Here, you will find a curated selection of resources and tools
								to support your English language learning journey.
							</p>
							<Link
								href="/blog/englishStudy"
								className="border rounded w-1/2 sm:w-1/4 flex justify-center
								hover:bg-slate-50"
							>
								{" "}
								Read More
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="w-1/4 h-full " />
		</div>
	);
}

export default page;
