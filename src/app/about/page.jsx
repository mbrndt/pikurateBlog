"use client";
import React from "react";
import { useState } from "react";
import SocialShare from "../components/SocialShare";
import Modal from "../components/Modal";

function AboutPage() {
	const metadata = {
		title: "About | Pikurate",
	};

	const [isModalVisible, setIsModalVisible] = useState(false);
	return (
		<div className="w-screen min-h-screen flex flex-row">
			<div className="w-1/4 h-full " />
			<div className="border-x ">
				<h1 className="pb-10 mt-5 text-2xl flex justify-center">
					Welcome to Pikurate
				</h1>
				<p className=" mx-10">
					Welcome to our platform! At Pikurate, we are passionate about curating
					knowledge and providing a seamless learning experience for our users.
					Our mission is to empower individuals to explore and discover
					information tailored to their interests in the most efficient and
					user-friendly manner. With the help of our cutting-edge AI and machine
					learning algorithm, coupled with the active participation of our
					vibrant community, we have created a curated content platform that
					revolutionizes the way you access information.
					<br />
					<br />
					Our AI-driven system gathers and organizes a vast array of knowledge
					from across the internet, ensuring that you have easy access to the
					most relevant and valuable content. We believe in the power of
					community collaboration. Expert curators from our community play a
					pivotal role in vetting and organizing the information, ensuring its
					quality and accuracy. Additionally, our AI generates insightful
					summaries based on user comments, providing you with a comprehensive
					understanding of each piece of information. Our platform goes beyond
					just providing information. We encourage active engagement and
					knowledge sharing through our bookmarking feature, allowing you to
					save and organize links to interesting articles, resources, and
					websites that you discover during your exploration.
					<br />
					<br />
					Join us on this exciting journey of knowledge discovery and personal
					growth. Sign up today and become part of our thriving community.
					Together, lets unlock the power of curated knowledge and make learning
					an enriching and enjoyable experience for everyone. Thank you for
					choosing Pikurate. Lets embark on this knowledge-driven adventure
					together!
				</p>

				<div className="bg-gray-50 rounded-xl flex flex-row gap-5 mt-5 items-center">
					<button
						data-modal-target="defaultModal"
						data-modal-toggle="defaultModal"
						type="button"
						className="uppercase ml-2 font-bold border rounded-xl border-gray-500 px-2 h-15 md:px-5 md:m-5"
						onClick={() => setIsModalVisible(true)}
					>
						Share
					</button>

					<p className="m-10">
						If you found Pikurate helpful, please share it with your friends and
						colleagues.
					</p>
				</div>
				<Modal
					isVisible={isModalVisible}
					onClose={() => setIsModalVisible(false)}
				>
					<SocialShare
						link="https://pikurate-blog.vercel.app/"
						title="Interesting Blog from Pikurate."
					/>
				</Modal>
			</div>

			<div className="w-1/4 h-full " />
		</div>
	);
}

export default AboutPage;
