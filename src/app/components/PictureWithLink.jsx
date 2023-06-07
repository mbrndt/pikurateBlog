import React from "react";
import Image from "next/image";
import Link from "next/link";

function PictureWithLink({ image, link, title, description }) {
	return (
		<div className="flex flex-col items-center ">
			<div className="flex items-center gap-5 border-b mt-5">
				<Image
					src={image}
					alt=""
					className="rounded-lg w-1/4 h-1/4 mb-5"
					loading="lazy"
				/>
				<p className="mb-5">
					<Link
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="underline text-blue-500 font-sans"
					>
						{title}{" "}
					</Link>
					<br />
					{description}
				</p>
			</div>
		</div>
	);
}

export default PictureWithLink;
