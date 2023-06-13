"use client";

const { default: Link } = require("next/link");
import logo from "../assets/BI_color.png";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		console.log(isMenuOpen);
	};

	return (
		<nav className="mt-2 border-b font-sans">
			<div className="flex flex-row items-center justify-between">
				<div className="text-blue-900 flex flex-row items-center gap-3 md:ml-5 font-sans">
					<Link href="/" className="w-1/4 h-1/4">
						<Image src={logo} className=" mb-2" alt="Pikurate Logo" />
					</Link>
				</div>
				<ul className="flex justify-end">
					<div className=" mr-5 hidden md:flex">
						<Link className="mr-5 hidden md:flex" href="/blog">
							Blog
						</Link>
						<Link className="mr-5 hidden md:flex" href="/about">
							About
						</Link>
						<Link
							className="mr-5 hidden md:flex bg-blue-200 rounded-lg px-4 text-blue-700 hover:bg-blue-300 hover:text-blue-900 font-medium ml-8"
							href={"/auth/login"}
						>
							Login
						</Link>
					</div>
				</ul>
				<div className="md:hidden mr-5">
					<button type="button" onClick={handleMenu}>
						<AiOutlineMenu size={30} />
					</button>
				</div>
				{isMenuOpen ? (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							<Link href="/blog">Blog</Link>
							<Link href="/about">About</Link>
						</div>
					</div>
				) : null}
			</div>
		</nav>
	);
};

export default Header;
