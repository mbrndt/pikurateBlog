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
		<header className="mt-2 border-b font-sans">
			<div className="flex flex-row items-center justify-between">
				<div className="text-blue-900 flex flex-row items-center gap-3 md:ml-5 font-sans">
					<Link href="/" className="w-1/4 h-1/4">
						<Image src={logo} className=" mb-2" alt="Pikurate Logo" />
					</Link>
				</div>
				<div className="flex justify-end">
					<div className=" mr-5 hidden md:flex">
						<Link href="/blog">Blog</Link>
					</div>
					<div className=" mr-5 hidden md:flex">
						<Link href="/about">About</Link>
					</div>
				</div>
				<div className="md:hidden mr-5">
					<button type="button" onClick={handleMenu}>
						<AiOutlineMenu size={30} />
					</button>
				</div>
				{isMenuOpen ? (
					<div className="flex flex-col items-center justify-center md:hidden">
						<div className="flex flex-col items-center justify-center">
							<Link href="/blog">Blog</Link>
							<Link href="/about">About</Link>
						</div>
					</div>
				) : null}
			</div>
		</header>
	);
};

export default Header;
