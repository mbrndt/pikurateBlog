import React from "react";
import Image from "next/image";

function PikurateBPDesc({ image }) {
	return (
		<div>
			<div className="flex items-center flex-col border-b-2 pb-4 mt-5">
				<Image
					src={image}
					className="w-3/4 h-3/4 md:h-1/2 md:w-1/2 rounded my-5"
					alt=""
				/>
				<p className="bg-gray-50 rounded-lg w-full md:w-3/4 p-4">
					Pikurate, a content curation provider, has compiled a comprehensive
					collection of information on this topic from across the internet. The
					platform has a community of expert curators who vetted and organized
					this information. Each piece of content was assigned a Curating Point
					(CP) score calculated by Pikurate, which indicated its relevance and
					reliability. Moreover, the platform used AI to generate notes that
					summarized the comments on each piece of information. This made it
					easy for users to understand and evaluate the content. Enjoy a curated
					content collection just for you!
				</p>
			</div>
		</div>
	);
}

export default PikurateBPDesc;
