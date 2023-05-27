import React from "react";
import Link from "next/link";

const CommentsPage = () => {
	return (
		<div className=" w-screen min-h-screen flex flex-row">
			<div className="md:w-1/4 md:h-full " />
			<div className="md:border-x md:w-full items-center md:p-5">
				<div className="mt-3">
					<Link
						href="/blog/englishStudy"
						className="uppercase font-serif ml-2 mt-10 border rounded-xl border-gray-500 px-2 h-15 md:px-5 md:m-5 hover:bg-gray-50"
					>
						back
					</Link>
				</div>

				<h1 className=" text-3xl  m-5 justify-center flex">Comments</h1>
				<div className="m-5">
					<p>coming soon ...</p>
				</div>
			</div>
			<div className="md:w-1/4 md:h-full " />
		</div>
	);
};

export default CommentsPage;
