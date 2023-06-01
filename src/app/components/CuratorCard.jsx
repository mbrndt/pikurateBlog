import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CuratorCard = ({ image, link, name, job }) => {
	return (
		<div>
			<div className="flex flex-row gap-3 mb-5">
				<Image
					src={image}
					width="25"
					height="25"
					alt=""
					className="rounded-full w-10 h-10"
				/>
				<Link
					target="_blank"
					rel="noopener"
					href={link}
					className="text-blue-600 self-center text-xl"
				>
					{name}
					<span className="px-2 text-sm text-gray-300">| {job} |</span>{" "}
					<span className="text-sm">follow</span>
				</Link>
			</div>
		</div>
	);
};
