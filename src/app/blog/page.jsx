import Link from "next/link";
import Image from "next/image";
import React from "react";
import study from "../assets/study.jpg";
import seoul from "../assets/seoul.jpg";
import BPCard from "../components/BPCard";
import BPHeader from "../components/BPHeader";

export const metadata = {
	title: "Blog | Pikurate",
};

function page() {
	return (
		<div className=" w-screen min-h-screen flex flex-row">
			<div className="md:w-1/4 md:h-full " />
			<div className="md:border-x  items-center md:p-5">
				<h1 className=" text-3xl mt-5 justify-center flex">Blog</h1>
				<div className="flex items-center flex-col border-b-2 pb-4 mt-5">
					<p className="bg-gray-50 rounded-lg w-full md:w-3/4 p-4">
						Welcome to our blog website, powered by{" "}
						<span className="text-blue-800">
							Pikurate - the leading knowledge curation platform.
						</span>
						Here, we take the wealth of information gathered by our community
						and AI algorithms and transform selected &quot;piks&quot; into
						engaging blog posts. From travel insights and expert tips to
						captivating stories and thought-provoking analysis, we curate
						knowledge to satisfy your thirst for learning. For a broader range
						of curated knowledge, be sure to visit the Pikurate homepage at{" "}
						<Link
							className="text-blue-500"
							href="https://www.pikurate.com/"
							rel="noopener"
							target="_blank"
						>
							www.pikurate.com
						</Link>{" "}
						. Join us on this journey of exploration, as we bring you the best
						of curated knowledge right at your fingertips.
					</p>
				</div>
				<div className="mt-10">
					<BPCard
						image={seoul}
						link="/blog/AllAboutSeoul"
						title="All About Seoul"
						desc="Uncover all the essential information for your upcoming journey to Seoul, South Korea. Explore a wealth of details about top-notch dining spots and must-see tourist attractions, ensuring you're well-prepared for an unforgettable adventure."
					/>
					{/* <BPCard
						image={study}
						link="/blog/englishStudy"
						title="English Study Materials"
						desc="Welcome to our English Language Learning section, where we have carefully curated a selection of resources and tools to support your language journey. Whether you're looking to improve your grammar skills or expand your vocabulary, we have you covered. Explore our collection and embark on a seamless learning experience to enhance your English proficiency."
					/> */}
				</div>
			</div>
			<div className="md:w-1/4 md:h-full " />
		</div>
	);
}

export default page;
