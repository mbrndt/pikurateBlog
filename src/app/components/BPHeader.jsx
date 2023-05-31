import React from "react";
import Link from "next/link";

function BPHeader() {
	return (
		<div>
			<div className="flex flex-row overflow-x-auto whitespace-nowrap border-b gap-10 pl-10 text-xl py-2 sticky top-0 backdrop-blur-sm bg-white/30">
				<Link
					href="/blog/englishStudy#first-section"
					scroll={false}
					className="capitalize"
				>
					Websites about studying English
				</Link>
			</div>
		</div>
	);
}

export default BPHeader;
