import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/parkjinyoung.jpeg";
import hero from "../../assets/study.jpg";

function EnglishStudyPage() {
	return (
		<div className="text-black w-screen min-h-screen flex flex-row">
			<div className="w-1/4 h-full " />
			<div className="border-x w-full p-5">
				<div className="flex flex-row w-full border-b gap-10 pl-10 text-xl">
					<p>Tutorials</p>
					<p>Tools and Libraries</p>
				</div>
				<div className="mt-10">
					<div>
						<h1 className="text-4xl m-5">
							A Collection Of Helpful Sites For Studying English
						</h1>
					</div>

					<div className="flex flex-col bg-slate-100 rounded-lg w-fit ml-10 mt-10">
						<div className="flex flex-row gap-5 pl-5 mt-5">
							<Image src={logo} alt="" className="rounded-full w-10 h-10" />
							<p className="text-blue-600">
								Leo.song
								<span className="text-black px-2">and</span> 23 more curators
							</p>
						</div>
						<div className="pl-20 mr-5">
							<p className="text-blue-600">
								duolingo.com and 223 more references
							</p>
							<p className="text-slate-400">last update: 1w ago</p>
						</div>
					</div>
					<div className="flex items-center flex-col border-b-2 pb-4">
						<Image
							src={hero}
							className="w-3/4 h-3/4 md:h-1/2 md:w-1/2 rounded my-5"
							alt=""
						/>
						<p className="bg-slate-100 rounded-lg w-3/4 p-4">
							Pikurate, a content curation provider, has compiled a
							comprehensive collection of information on this topic from across
							the internet. The platform has a community of expert curators who
							vetted and organized this information. Each piece of content was
							assigned a Curating Point (CP) score calculated by Pikurate, which
							indicated its relevance and reliability. Moreover, the platform
							used AI to generate notes that summarized the comments on each
							piece of information. This made it easy for users to understand
							and evaluate the content. Enjoy a curated content collection just
							for you!
						</p>
					</div>
					<div className="flex flex-col items-center">
						<h1 className="text-4xl m-5 ">Websites about studying English</h1>
						<Image
							src={hero}
							alt=""
							className=" justify-center rounded-lg md:w-15 md:h-15"
						/>
						<p className="bg-slate-100 rounded-lg w-3/4 p-4 my-5 ">
							Discover our carefully curated collection of English learning
							resources, featuring a variety of tools, tutorials, and practice
							materials to support your language journey.
						</p>
						<div className="flex items-center gap-5 border-b">
							<Image
								src={hero}
								alt=""
								className="rounded-lg w-1/4 h-1/4 md:w-1/2 md:h-1/2"
							/>
							<p className="mb-5">
								<span className="underline text-blue-500 font-sans">
									영어 작문을 도와주는 사이트 모음 -{" "}
								</span>{" "}
								Explore this handy collection of grammar and spelling check
								tools for English, designed to help you enhance your writing
								skills and ensure accuracy in your written communication.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-1/4 h-full " />
		</div>
	);
}

export default EnglishStudyPage;
