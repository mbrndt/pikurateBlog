import React from "react";
import Image from "next/image";
import Link from "next/link";

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
						<p>coming soon ...</p>
					</div>
				</section>

				<h1 className=" text-3xl  m-5 justify-start flex">References</h1>
				<div className="m-5">
					<p>coming soon ...</p>
				</div>
			</div>
			<div className="md:w-1/4 md:h-full " />
		</div>
	);
};

export default CuratorPage;
