import React from "react";
import {
	FacebookShareButton,
	FacebookIcon,
	LineShareButton,
	LineIcon,
	PinterestShareButton,
	PinterestIcon,
	WhatsappShareButton,
	WhatsappIcon,
	LinkedinShareButton,
	LinkedinIcon,
	FacebookMessengerShareButton,
	FacebookMessengerIcon,
} from "next-share";

const SocialShare = ({ link, title }) => {
	return (
		<div className="m-5 focus:">
			<p className="text-xl">
				Please click on the icon to share to your desired platform. Thank you
				for sharing!
			</p>
			<div className="flex mt-5">
				<FacebookShareButton
					url={link}
					quote={title}
					hashtag={"#pikurate "}
					className=" focus:ring-4 focus:w-1/2 focus:ring-blue-500 focus:ring-opacity-50"
					focusable="true"
				>
					<FacebookIcon
						className="mr-5 focus:bg-red-400"
						size={32}
						round
						aria-label="facebook share icon"
						focusable="true"
					/>
				</FacebookShareButton>

				<LineShareButton url={link} title={title}>
					<LineIcon
						className="mr-5 focus:border-blue-500"
						size={32}
						round
						aria-label="Line share icon"
						focusable="true"
					/>
				</LineShareButton>
				<PinterestShareButton url={{}} media={title}>
					<PinterestIcon
						className="mr-5"
						size={32}
						round
						aria-label="Pinterest share icon"
					/>
				</PinterestShareButton>

				<WhatsappShareButton url={link} title={title} separator="//">
					<WhatsappIcon
						className="mr-5"
						size={32}
						round
						aria-label="Whatsapp share icon"
					/>
				</WhatsappShareButton>
				<LinkedinShareButton url={link}>
					<LinkedinIcon
						className="mr-5"
						size={32}
						round
						aria-label="Linkedin share icon"
					/>
				</LinkedinShareButton>
				<FacebookMessengerShareButton url={link} appId={""}>
					<FacebookMessengerIcon
						className="mr-5"
						size={32}
						round
						aria-label="facebook messenger share icon"
					/>
				</FacebookMessengerShareButton>
			</div>
		</div>
	);
};

export default SocialShare;
