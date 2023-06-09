"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BPCard from "@/app/components/BPCard";
import logo from "../../assets/parkjinyoung.jpeg";
import hero from "../../assets/study.jpg";
import image1 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import seoul from "../../assets/seoul.jpg";
import Modal from "@/app/components/Modal";
import SocialShare from "@/app/components/SocialShare";
import PictureWithLink from "@/app/components/PictureWithLink";
import PikurateBPDesc from "@/app/components/PikurateBPDesc";
import BPHeader from "@/app/components/BPHeader";

function EnglishStudyPage(image, link, title, description) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	return (
		<div className="max-w-screen min-h-screen flex flex-row md:justify-center">
			<div className="md:w-32 md:h-full shrink-0 bg-gray-300"></div>
			<div className="md:border-x ml-3 md:pl-5 pr-5 w-screen md:w-3/4">
				<div className="flex flex-row overflow-x-auto whitespace-nowrap border-b gap-10 pl-10 text-xl py-2 sticky top-0 backdrop-blur-sm bg-white/30">
					<Link
						href="/blog/englishStudy#first-section"
						scroll={false}
						className="capitalize"
					>
						Websites about studying English
					</Link>
				</div>
				<div className="mt-10">
					<div>
						<h1 className="text-4xl m-5 pt-5">
							A Collection Of Helpful Sites For Studying English
						</h1>
					</div>

					<div className="flex flex-col bg-gray-100 rounded-lg w-fit mt-10 ">
						<div className="flex flex-row gap-5 pl-2 mt-5">
							<Link href="/blog/curators" className="flex flex-row gap-3">
								<Image src={logo} alt="" className="rounded-full w-10 h-10" />
								<p className="text-blue-600 self-center">
									Leo.song
									<span className="text-black px-2">and</span> 23 more curators
								</p>
							</Link>
						</div>
						<div className="pl-20 mr-5">
							<p className="text-blue-600">
								duolingo.com and 223 more references
							</p>
							<p className="text-slate-400 pb-5">last update: 1w ago</p>
						</div>
					</div>
					<PikurateBPDesc image={hero} />
					<section>
						{/* blog cards */}
						<div className="flex flex-col items-center">
							<h1 id="first-section" className="text-4xl m-5 capitalize">
								Websites about studying English
							</h1>
							<Image
								src={image3}
								alt=""
								className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
							/>
							<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
								Discover our carefully curated collection of English learning
								resources, featuring a variety of tools, tutorials, and practice
								materials to support your language journey.
							</p>
							<div className="flex items-center gap-5 border-b mt-5 flex-col">
								<PictureWithLink
									image={image1}
									link="https://truecloset.tistory.com/91"
									title="영어 작문을 도와주는 사이트 모음 -"
									description="Explore this handy collection of grammar and spelling check
									tools for English, designed to help you enhance your writing
									skills and ensure accuracy in your written communication."
								/>

								<PictureWithLink
									image={image4}
									link="https://m.post.naver.com/viewer/postView.nhn?volumeNo=17157664&memberNo=15962196&vType=VERTICAL"
									title="영어공부혼자하기 유용한 사이트 모음 37개 -"
									description="Explore an extensive range of subjects designed to improve
								your vocabulary, grammar, speaking, and writing abilities,
								empowering you to excel in English communication across
								various domains."
								/>
								<PictureWithLink
									image={image4}
									link="https://m.post.naver.com/viewer/postView.nhn?volumeNo=17157664&memberNo=15962196&vType=VERTICAL"
									title="영어공부혼자하기 유용한 사이트 모음 37개 -"
									description="Explore an extensive range of subjects designed to improve
								your vocabulary, grammar, speaking, and writing abilities,
								empowering you to excel in English communication across
								various domains."
								/>
							</div>
						</div>
					</section>
					<section>
						{/* share buttons and comment section */}
						<div className="flex flex-col items-center mt-5">
							<p>This Page has 264,094 views</p>
							<div className="">
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

									<p className="m-5">
										If you found this page helpful, please share it with your
										friends and colleagues.
									</p>
								</div>
								<Modal
									isVisible={isModalVisible}
									onClose={() => setIsModalVisible(false)}
								>
									<SocialShare
										link="https://pikurate-blog.vercel.app/blog/englishStudy"
										title="Interesting Blog Post from Pikurate."
									/>
								</Modal>
								<div className="bg-gray-50 rounded-xl flex flex-row gap-5 mt-5 items-center">
									<Link
										href="https://www.pikurate.com/"
										className="uppercase ml-2 font-bold border rounded-xl border-gray-500 px-2 h-15 w md:px-5 md:m-5"
									>
										Sign Up
									</Link>
									<p className="m-5">
										Sign up for our free social bookmarking service that uses
										the latest cutting-edge technology.
									</p>
								</div>
								<div className="bg-gray-50 rounded-xl flex flex-row gap-5 mt-5 items-center">
									<button className="uppercase ml-2 font-bold border rounded-xl border-gray-500 px-2 h-15 md:px-5 md:m-5">
										Request{" "}
									</button>
									<p className="m-5">
										If you are interested in becoming a curator or have any
										suggestions for us, please dont hesitate to reach out to us.
									</p>
								</div>
							</div>
							<Link
								href="/blog/comments"
								className="uppercase font-serif ml-2 mt-10 border rounded-xl border-gray-500 px-2 h-15 md:px-5 md:m-5 hover:bg-gray-50"
							>
								298 Comments
							</Link>
							<div className="flex flex-row space-x-3 mt-10 justify-start  w-full border-b">
								<p className="uppercase border rounded-xl border-gray-500 px-2 mb-5">
									english study
								</p>
								<p className="uppercase border rounded-xl border-gray-500 px-2 mb-5">
									studying
								</p>
							</div>
						</div>
					</section>
					<section>
						{/* suggested section */}
						<div>
							<h1 className="font-serif text-2xl uppercase mt-5">
								more like this
							</h1>
							<BPCard
								image={seoul}
								link="/blog/AllAboutSeoul"
								title="All About Seoul"
								desc="Here, you will find a curated selection of resources and tools to support your English language learning journey."
							/>
							<p className="mt-10 h-40">coming soon ...</p>
						</div>
					</section>
				</div>
			</div>
			<div className="md:w-32 md:h-full shrink-0 bg-gray-300"></div>
		</div>
	);
}

export default EnglishStudyPage;
