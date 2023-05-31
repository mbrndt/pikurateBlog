"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/parkjinyoung.jpeg";
import hero from "../../assets/study.jpg";
import image1 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import Modal from "@/app/components/Modal";
import SocialShare from "@/app/components/SocialShare";

function EnglishStudyPage() {
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
					<div className="flex items-center flex-col border-b-2 pb-4 mt-5">
						<Image
							src={hero}
							className="w-3/4 h-3/4 md:h-1/2 md:w-1/2 rounded my-5"
							alt=""
						/>
						<p className="bg-gray-50 rounded-lg w-full md:w-3/4 p-4">
							Pikurate, a content curation provider, has compiled a
							comprehensive collection of information on this topic from across
							the internet. The platform has a community of expert curators who
							vetted and organized this information. Each piece of content was
							assigned a Curating Point (CP) score calculated by Pikurate, which
							indicated its relevance and reliability. Moreover, the platform
							used AI to generate notes that summarized the comments on each
							piece of information. This made it easy for users to understand
							and evaluate the content. Enjoy a curated content collection just
							for you!
						</p>
					</div>
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
							<div className="flex items-center gap-5 border-b mt-5">
								<Image
									src={image1}
									alt=""
									className="rounded-lg w-1/4 h-1/4 mb-5"
								/>
								<p className="mb-5">
									<Link
										href="https://truecloset.tistory.com/91"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-blue-500 font-sans"
									>
										영어 작문을 도와주는 사이트 모음 -{" "}
									</Link>{" "}
									<br />
									Explore this handy collection of grammar and spelling check
									tools for English, designed to help you enhance your writing
									skills and ensure accuracy in your written communication.
								</p>
							</div>
							<div className="flex items-center gap-5 border-b mt-5">
								<Image
									src={image4}
									alt=""
									className="rounded-lg w-1/4 h-1/4 mb-5"
								/>
								<p className="mb-5">
									<Link
										href="https://m.post.naver.com/viewer/postView.nhn?volumeNo=17157664&memberNo=15962196&vType=VERTICAL"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-blue-500 font-sans"
									>
										영어공부혼자하기 유용한 사이트 모음 37개 -{" "}
									</Link>
									<br />
									Explore an extensive range of subjects designed to improve
									your vocabulary, grammar, speaking, and writing abilities,
									empowering you to excel in English communication across
									various domains.
								</p>
							</div>
							<div className="flex items-center gap-5 border-b mt-5">
								<Image
									src={image5}
									alt=""
									className="rounded-lg w-1/4 h-1/4 mb-5"
								/>
								<p className="mb-5">
									<Link
										href="https://oxchat.tistory.com/263"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-blue-500 font-sans"
									>
										영어작문을 도와주는 유용한 무료사이트, Just the Word! -{" "}
									</Link>
									<br />
									Explores the website “Just the Word!”
								</p>
							</div>
							<div className="flex items-center gap-5 border-b mt-5">
								<Image
									src={image6}
									alt=""
									className="rounded-lg w-1/4 h-1/4 mb-5"
								/>
								<p className="mb-5">
									<Link
										href="http://cafeclass.kr/%EC%98%81%EC%96%B4-%EA%B3%B5%EB%B6%80%EC%97%90-%EB%8F%84%EC%9B%80%EC%9D%B4-%EB%90%98%EB%8A%94-%EC%82%AC%EC%9D%B4%ED%8A%B8/"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-blue-500 font-sans"
									>
										영어 공부에 도움이 되는 사이트들 -{" "}
									</Link>
									<br />
									several websites to improve your english
								</p>
							</div>
							<div className="flex items-center gap-5 border-b mt-5">
								<Image
									src={image7}
									alt=""
									className="rounded-lg w-1/4 h-1/4 mb-5"
								/>
								<p className="mb-5">
									<Link
										href="https://livingalonewell.tistory.com/17"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-blue-500 font-sans"
									>
										영어공부에 유용한 무료 사이트 모음 (케이크 어플, 그래멀리,
										유글리쉬, yarn, 유튜브 영어는반복이다) -{" "}
									</Link>{" "}
									<br />
									free sites that will help you learn english
								</p>
							</div>
							<div className="flex items-center gap-5 border-b mt-5">
								<Image
									src={image8}
									alt=""
									className="rounded-lg w-1/4 h-1/4 mb-5"
								/>
								<p className="mb-5">
									<Link
										href="https://m.blog.naver.com/icyee/130172016491"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-blue-500 font-sans"
									>
										영작학습을 위한 추천사이트 모음 (퍼옴) -{" "}
									</Link>
									<br />A collection of recommended sites for English writing
									learning
								</p>
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
