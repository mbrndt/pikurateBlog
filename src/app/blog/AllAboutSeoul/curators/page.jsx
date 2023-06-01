import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/parkjinyoung.jpeg";
import LeoSong from "../../../assets/leoProfile.png";
import seoul from "../../../assets/seoul.jpg";
import MarBrandt from "../../../assets/profile-image.jpg";
import FonzReyna from "../../../assets/curpik.png";
import { CuratorCard } from "@/app/components/CuratorCard";

const seoul3 =
	"https://images.unsplash.com/photo-1598932248380-2b1c90a6c858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80";
const seoul2 =
	"https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80";

const CuratorPage = () => {
	return (
		<div className=" w-screen min-h-screen flex flex-row">
			<div className="md:w-1/4 md:h-full " />
			<div className="md:border-x md:w-full items-center md:p-5">
				<div className="flex flex-row w-full border-b gap-10 pl-10 text-xl py-2 xs sticky top-0 bg-white">
					<p className="capitalize">Curators</p>
					<Link href="/blog/AllAboutSeoul/curators#ref" className="capitalize">
						References
					</Link>
				</div>
				<div className="mt-5">
					<Link
						href="/blog/AllAboutSeoul"
						className="uppercase font-serif ml-2 mt-10 border rounded-xl border-gray-500 px-2 h-15 md:px-5 md:m-5 hover:bg-gray-50"
					>
						back
					</Link>
				</div>
				<section id="curators" className=" border-b mt-10">
					{/* Curators */}
					<h1 className=" text-3xl  m-5 justify-start flex">Curators</h1>
					<div className="m-5">
						<CuratorCard
							image={LeoSong}
							link="https://www.pikurate.com/piks?userId=49&tab=my"
							name="Leo Song"
							job="Pikurate Team"
						/>
						<CuratorCard
							image={seoul2}
							link="https://www.pikurate.com/piks?userId=6233&tab=my"
							name="kku"
							job="Pikurate Member"
						/>
						<CuratorCard
							image={seoul}
							link="https://www.pikurate.com/piks?userId=6291&tab=my"
							name="maximus"
							job="Pikurate Member"
						/>
						<CuratorCard
							image={FonzReyna}
							link="https://www.pikurate.com/piks?userId=6209&tab=my"
							name="Fonz Reyna"
							job="Pikurate Member"
						/>
						<CuratorCard
							image={seoul3}
							link="https://www.pikurate.com/piks?userId=6314&tab=my"
							name="black tea"
							job="Pikurate Member"
						/>
						<CuratorCard
							image={MarBrandt}
							link="https://www.pikurate.com/piks?userId=11341&tab=my"
							name="Mareike Brandt"
							job="Pikurate Team"
						/>
					</div>
				</section>

				<section id="ref">
					{/* References */}
					<h1 className=" text-3xl  m-5 justify-start flex">References</h1>
					<div className="m-5">
						<ol type="1" className="m-5">
							<li className=" mb-5">
								<Link
									href="https://www.youtube.com/watch?v=ZVY3NQ0Jq1Q"
									className=" self-center text-xl mb-5"
								>
									1. Example Reference: Number One -{" "}
									<span className="underline">
										https://www.youtube.com/watch?v=ZVY3NQ0Jq1Q
									</span>
								</Link>
							</li>
							<li className=" mb-5">
								<Link
									href="https://www.youtube.com/watch?v=ZVY3NQ0Jq1Q"
									className=" self-center text-xl mb-5"
								>
									2. Second Example: For Refs -{" "}
									<span className="underline">https://www.ZVY3NQ0Jq1Q</span>
								</Link>
							</li>
						</ol>
					</div>
				</section>
			</div>
			<div className="md:w-1/4 md:h-full " />
		</div>
	);
};

export default CuratorPage;
