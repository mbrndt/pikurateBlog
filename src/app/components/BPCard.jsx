import React from "react";
import Link from "next/link";
import Image from "next/image";

function BPCard({ image, link, title, desc }) {
	return (
		<div className="">
			<div className="w-full h-fit mb-5 border rounded-xl flex flex-row flex-wrap justify-center">
				<Image
					className="h-fit w-fit mt-5 rounded"
					src={image}
					width={150}
					height={150}
					alt=""
					loading="lazy"
				/>
				<div className="flex flex-col pb-5 items-center">
					<Link className="pl-5 mt-5 text-2xl font-sans" href={link}>
						{title}
					</Link>
					<p className=" py-5 w-3/4">{desc}</p>
					<Link
						href={link}
						className="uppercase border rounded-xl border-gray-500 px-2 mb-5 w-1/2 sm:w-1/4 flex justify-center
            hover:bg-slate-50"
					>
						{" "}
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
}

export default BPCard;
