const { default: Link } = require("next/link");
import logo from "../assets/BI_color.png";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
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
					<button>
						<AiOutlineMenu size={30} />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
