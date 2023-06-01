import Link from "next/link";
import Image from "next/image";
import React from "react";
import study from "../assets/study.jpg";
import seoul from "../assets/seoul.jpg";
import BPCard from "../components/BPCard";

export const metadata = {
	title: "Blog | Pikurate",
};

function page() {
	return (
		<div className=" w-screen min-h-screen flex flex-row">
			<div className="md:w-1/4 md:h-full " />
			<div className="md:border-x  items-center md:p-5">
				<h1 className=" text-3xl mt-5 justify-center flex">Blog</h1>
				<div className="mt-10">
					<BPCard
						image={study}
						link="/blog/englishStudy"
						title="English Study Materials"
						desc="Here, you will find a curated selection of resources and tools to support your English language learning journey."
					/>
				</div>
			</div>
			<div className="md:w-1/4 md:h-full " />
		</div>
	);
}

export default page;
