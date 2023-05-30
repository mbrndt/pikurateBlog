import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/parkjinyoung.jpeg";
import image3 from "../../assets/image3.jpg";

const CuratorPage = () => {
	return (
		<div className=" w-screen min-h-screen flex flex-row">
			<div className="md:w-1/4 md:h-full " />
			<div className="md:border-x md:w-full items-center md:p-5">
				<div className="flex flex-row w-full border-b gap-10 pl-10 text-xl py-2 xs sticky top-0 bg-white">
					<p className="capitalize">Curators</p>
					<p className="capitalize">References</p>
				</div>
				<div className="mt-5">
					<Link
						href="/blog/englishStudy"
						className="uppercase font-serif ml-2 mt-10 border rounded-xl border-gray-500 px-2 h-15 md:px-5 md:m-5 hover:bg-gray-50"
					>
						back
					</Link>
				</div>
				<section className=" border-b mt-10">
					{/* Curators */}
					<h1 className=" text-3xl  m-5 justify-start flex">Curators</h1>
					<div className="m-5">
						<div className="flex flex-row gap-3 mb-5">
							<Image src={logo} alt="" className="rounded-full w-10 h-10" />
							<Link
								href="https://www.pikurate.com/piks?userId=49&tab=my"
								className="text-blue-600 self-center text-xl"
							>
								Leo.song
								<span className="px-2 text-sm text-gray-300">
									| Product owner |
								</span>{" "}
								<span className="text-sm">follow</span>
							</Link>
						</div>
						<div className="flex flex-row gap-3">
							<Image src={image3} alt="" className="rounded-full w-10 h-10" />
							<Link
								href="https://www.pikurate.com/piks?userId=11341&tab=my"
								className="text-blue-600 self-center text-xl"
							>
								Mareike Brandt
								<span className="px-2 text-sm text-gray-300">
									| Frontend Dev |
								</span>{" "}
								<span className="text-sm">follow</span>
							</Link>
						</div>
					</div>
				</section>

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
			</div>
			<div className="md:w-1/4 md:h-full " />
		</div>
	);
};

export default CuratorPage;
