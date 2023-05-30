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
		<div className="">
			<p>
				Please click on the icon to share to your desired platform. Thank you
				for sharing!
			</p>
			<div className="gap-10">
				<FacebookShareButton url={link} quote={title} hashtag={"#pikurate "}>
					<FacebookIcon size={32} round />
				</FacebookShareButton>

				<LineShareButton url={link} title={title}>
					<LineIcon size={32} round />
				</LineShareButton>
				<PinterestShareButton url={{}} media={title}>
					<PinterestIcon size={32} round />
				</PinterestShareButton>

				<WhatsappShareButton url={link} title={title} separator=":: ">
					<WhatsappIcon size={32} round />
				</WhatsappShareButton>
				<LinkedinShareButton url={link}>
					<LinkedinIcon size={32} round />
				</LinkedinShareButton>
				<FacebookMessengerShareButton url={link} appId={""}>
					<FacebookMessengerIcon size={32} round />
				</FacebookMessengerShareButton>
			</div>
		</div>
	);
};

export default SocialShare;
