"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "../../assets/parkjinyoung.jpeg";
import Seoul from "../../assets/seoul.jpg";
import seoul5 from "../../assets/seoul5.jpg";
import image1 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import LeoSong from "../../assets/leoProfile.png";
import Kor90day from "../../assets/90dayKorean.png";
import ToGo from "../../assets/ToGo.jpg";
import KoreanFood from "../../assets/KoreanFood.jpg";
import SeoulView from "../../assets/seoulView.jpg";
import SeoulStreet from "../../assets/seoulStreet.jpg";
import SeoulCafe from "../../assets/seoulCafe.jpg";
import brokeback from "../../assets/brokeback.jpeg";
import coex from "../../assets/coex.jpg";

import Modal from "@/app/components/Modal";
import SocialShare from "@/app/components/SocialShare";
import PictureWithLink from "@/app/components/PictureWithLink";
import PikurateBPDesc from "@/app/components/PikurateBPDesc";
import BPDirectory from "@/app/components/BPDirectory";

function AllAboutSeoulPage(image, link, title, description) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	return (
		<div className="max-w-screen min-h-screen flex flex-row md:justify-center">
			<div className="md:w-32 md:h-full shrink-0 bg-gray-300"></div>
			<div className="md:border-x ml-3 md:pl-5 pr-5 w-screen md:w-3/4">
				<div className="flex flex-row overflow-x-auto whitespace-nowrap border-b gap-10 pl-10 text-xl py-2 sticky top-0 backdrop-blur-sm bg-white/30">
					<Link
						href="/blog/AllAboutSeoul#section1"
						scroll={false}
						className="capitalize"
					>
						About Seoul
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section2"
						scroll={false}
						className="capitalize"
					>
						To Go
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section3"
						scroll={false}
						className="capitalize"
					>
						To Eat
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section4"
						scroll={false}
						className="capitalize"
					>
						Chicken and Beer
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section5"
						scroll={false}
						className="capitalize"
					>
						For Fun
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section6"
						scroll={false}
						className="capitalize"
					>
						Night Clubs
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section7"
						scroll={false}
						className="capitalize"
					>
						Night Culture
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section8"
						scroll={false}
						className="capitalize"
					>
						Subway Tour
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section9"
						scroll={false}
						className="capitalize"
					>
						Art Spot
					</Link>
					<Link
						href="/blog/AllAboutSeoul#section10"
						scroll={false}
						className="capitalize"
					>
						Exhibition
					</Link>
				</div>
				<div className="mt-10">
					<div>
						<h1 className="text-4xl m-5 pt-5 capitalize">
							Everything you need to know about Seoul
						</h1>
					</div>

					<div className="flex flex-col bg-gray-100 rounded-lg w-fit mt-10 ">
						<div className="flex flex-row gap-5 pl-2 mt-5">
							<Link
								href="/blog/AllAboutSeoul/curators"
								className="flex flex-row gap-3"
							>
								<Image
									src={LeoSong}
									alt=""
									className="rounded-full w-10 h-10"
								/>
								<p className="text-blue-600 self-center">
									Leo Song
									<span className="text-black px-2">and</span> 5 more curators
								</p>
							</Link>
						</div>
						<div className="pl-20 mr-5">
							<p className="text-blue-600">
								duolingo.com and 223 more references
							</p>
							<p className="text-slate-400 pb-5">last update: 1 ago</p>
						</div>
					</div>
					<PikurateBPDesc image={Seoul} />
					<BPDirectory />
					<section>
						<section id="section1">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">All About Seoul</h1>
								<Image
									src={seoul5}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Seoul, the capital of South Korea, is a bustling metropolis
									that seamlessly blends ancient traditions with modern
									innovations. From stunning palaces and serene temples to
									vibrant shopping districts and thriving nightlife, Seoul
									offers a diverse range of experiences. Delight in the
									city&apos;s renowned street food, immerse yourself in its
									vibrant K-pop culture, and explore its rich history through
									majestic landmarks. With its dynamic energy, captivating
									sights, and warm hospitality, Seoul is a city that never fails
									to captivate and leave a lasting impression on visitors.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Seoul}
										link="https://ginabearsblog.com/things-no-one-tells-you-about-korea"
										title="75 Things No One Tells You About Korea"
										description="Sometimes, Korea be living in the year 3021 with their unique inventions and technology advances. You’ll see brand new shiny building and also buildings that are older than the United States and Canada combined. You’ll see them make leaps and bounds. Other times you’ll wonder if you’re living in 1950 the way some people still treat women like second class citizens. So here it is, my friends. Read on for everything you didn’t know about Korea."
									/>
									<PictureWithLink
										image={Kor90day}
										link="https://www.90daykorean.com/interesting-facts-about-south-korea"
										title="Facts About South Korea – 30 Interesting Things to Learn"
										description="Explore an extensive range of subjects designed to improve
								your vocabulary, grammar, speaking, and writing abilities,
								empowering you to excel in English communication across
								various domains."
									/>
									<PictureWithLink
										image={SeoulView}
										link="https://daebak.co/en-kr/blogs/magazine/25-fun-facts-about-korea"
										title="25 Fun Facts About Korea!"
										description="Learning about a new country can be exciting, especially if you’re learning fun and interesting facts along the way! Though small, South Korea is a very diverse and exciting country. Here are some interesting tidbits and fun facts about Korea that might make you want to travel to the country today!"
									/>
									<PictureWithLink
										image={SeoulStreet}
										link="https://www.tripzilla.com/seoul-vs-tokyo/117974"
										title="Seoul or Tokyo: Which East Asian Capital Should You See First?"
										description="Sure, there’s not really a right or wrong answer to which city in Asia is better for first-timers. Nonetheless, it does help to identify the things you look for when travelling somewhere you haven’t been to before — as well as what you can expect from these. Either way, we’re willing to bet that the more time you spend in either Seoul or Tokyo, the more you'll fall in love with the place! Read on to find out which one is a better fit for you. "
									/>
									<PictureWithLink
										image={SeoulCafe}
										link="https://heyexplorer.com/what-is-seoul-known-and-famous-for/"
										title="25 Things Seoul is Known and Famous For"
										description="Seoul is known for its vibrant districts, eclectic fashion scene, delicious street food, and for being the birthplace of K-pop and Hallyu. Despite being a technologically advanced country, Seoul is still famous for its historical sites and traditional culture."
									/>
								</div>
							</div>
						</section>
						<section id="section2">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">To Do</h1>
								<Image
									src={ToGo}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Embark on a thrilling adventure in Seoul with our link list
									featuring an array of exciting activities and experiences to
									enjoy in the city. Discover hidden gems and popular
									attractions, indulge in mouthwatering cuisine, shop at vibrant
									markets, immerse yourself in cultural festivals, and explore
									the dynamic neighborhoods that make Seoul a captivating
									destination. Whether you&apos;re a history enthusiast, a food
									lover, a fashionista, or simply seeking unique adventures, our
									curated list of things to do in Seoul will inspire you to make
									the most of your visit and create unforgettable memories.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Seoul}
										link="https://www.wapititravel.com/blog/en/things-to-do-in-seoul/"
										title="39 EPIC things to do in Seoul perfect for first timers"
										description="Seoul is a bustling city full of old palaces and modern skyscrapers. In Seoul, you wander seamlessly from charming old streets into wide boulevards with towering skyscrapers. 

										You can shop till you drop for the newest gadgets and dive into the nightlife in the trendy and cosmopolitan Itaewon district.
										
										The view from the top of N Seoul Tower is breathtaking but we were completely blown away by the views of Seoul from Bukhansan National Park. 
										
										This park with its imposing mountains and historic temples borders the city in the North and is a great place to unwind.
										
										Here we compiled 39 of our favorite things to do in Seoul, South Korea.
										
										These include some of the best places to visit in Seoul, the most popular Seoul attractions, and ideas for getting more off the beaten track. "
									/>
									<PictureWithLink
										image={SeoulView}
										link="https://www.travellens.co/top-20-things-to-do-in-seoul/"
										title="50 Best Things to Do in Seoul
										"
										description="Culture wraps thick around every street, shop and social interactions; for all of Seoul’s explosive growth in recent decades, its strict traditions and national pride shadows every step.

										And this all-encompassing Korea-ness isn’t expressed through grand monuments and heritage sites; rather, it seeps through the everyday food markets, trendy spaces and budget entertainments.
										
										Approach Seoul through this list of local attractions and characterizing sites for a rounded insight into this evolving city."
									/>
									<PictureWithLink
										image={brokeback}
										link="https://www.thebrokebackpacker.com/best-places-to-visit-in-seoul/"
										title="34 BEST Places to Visit in Seoul (Attraction Guide for 2023)"
										description="The idea of traveling in Seoul can seem a little intimidating. It’s a sprawling metropolis and doesn’t quite have the complete ease of its East Asian neighbor Japan. However, Seoul is actually a very safe city and is popular amongst tourists, so the tourist trails are well worn and easy to explore.

										With this easy guide, you’ll find it easy to travel to Seoul and come back with stories and pictures that other people just can’t match! There are a lot of cool places to visit in Seoul, so let’s get to it!"
									/>
									<PictureWithLink
										image={coex}
										link="https://www.atlasobscura.com/things-to-do/south-korea"
										title="The Atlas Obscura Guide To South Korea"
										description="88 Cool, Hidden, and Unusual Things to Do in South Korea. Including Attractions, Food and Drink and more."
									/>
								</div>
							</div>
						</section>
						<section id="section3">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">To Eat</h1>
								<Image
									src={KoreanFood}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Discover Seoul like never before with our curated collection
									of links in the About Seoul section. Explore the vibrant
									capital city of South Korea through various resources,
									including travel guides, historical insights, local cuisine,
									cultural experiences, and more. Immerse yourself in the rich
									heritage and modern allure of Seoul as you delve into these
									handpicked links that showcase the citys unique charm and
									offer a deeper understanding of its fascinating culture.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Seoul}
										link="https://truecloset.tistory.com/91"
										title="영어 작문을 도와주는 사이트 모음 -"
										description="Explore this handy collection of grammar and spelling check
									tools for English, designed to help you enhance your writing
									skills and ensure accuracy in your written communication."
									/>
									<PictureWithLink
										image={Kor90day}
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
						<section id="section4">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">Chicken and Beer</h1>
								<Image
									src={KoreanFood}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Discover Seoul like never before with our curated collection
									of links in the About Seoul section. Explore the vibrant
									capital city of South Korea through various resources,
									including travel guides, historical insights, local cuisine,
									cultural experiences, and more. Immerse yourself in the rich
									heritage and modern allure of Seoul as you delve into these
									handpicked links that showcase the citys unique charm and
									offer a deeper understanding of its fascinating culture.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Seoul}
										link="https://truecloset.tistory.com/91"
										title="영어 작문을 도와주는 사이트 모음 -"
										description="Explore this handy collection of grammar and spelling check
									tools for English, designed to help you enhance your writing
									skills and ensure accuracy in your written communication."
									/>
									<PictureWithLink
										image={Kor90day}
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
						<section id="section5">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">For Fun</h1>
								<Image
									src={KoreanFood}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Discover Seoul like never before with our curated collection
									of links in the About Seoul section. Explore the vibrant
									capital city of South Korea through various resources,
									including travel guides, historical insights, local cuisine,
									cultural experiences, and more. Immerse yourself in the rich
									heritage and modern allure of Seoul as you delve into these
									handpicked links that showcase the citys unique charm and
									offer a deeper understanding of its fascinating culture.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Seoul}
										link="https://truecloset.tistory.com/91"
										title="영어 작문을 도와주는 사이트 모음 -"
										description="Explore this handy collection of grammar and spelling check
									tools for English, designed to help you enhance your writing
									skills and ensure accuracy in your written communication."
									/>
									<PictureWithLink
										image={Kor90day}
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
						<section id="section6">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">Night Clubs</h1>
								<Image
									src={KoreanFood}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Discover Seoul like never before with our curated collection
									of links in the About Seoul section. Explore the vibrant
									capital city of South Korea through various resources,
									including travel guides, historical insights, local cuisine,
									cultural experiences, and more. Immerse yourself in the rich
									heritage and modern allure of Seoul as you delve into these
									handpicked links that showcase the citys unique charm and
									offer a deeper understanding of its fascinating culture.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Seoul}
										link="https://truecloset.tistory.com/91"
										title="영어 작문을 도와주는 사이트 모음 -"
										description="Explore this handy collection of grammar and spelling check
									tools for English, designed to help you enhance your writing
									skills and ensure accuracy in your written communication."
									/>
									<PictureWithLink
										image={Kor90day}
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
						<section id="section7">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">Night Culture</h1>
								<Image
									src={KoreanFood}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Discover Seoul like never before with our curated collection
									of links in the About Seoul section. Explore the vibrant
									capital city of South Korea through various resources,
									including travel guides, historical insights, local cuisine,
									cultural experiences, and more. Immerse yourself in the rich
									heritage and modern allure of Seoul as you delve into these
									handpicked links that showcase the citys unique charm and
									offer a deeper understanding of its fascinating culture.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Seoul}
										link="https://truecloset.tistory.com/91"
										title="영어 작문을 도와주는 사이트 모음 -"
										description="Explore this handy collection of grammar and spelling check
									tools for English, designed to help you enhance your writing
									skills and ensure accuracy in your written communication."
									/>
									<PictureWithLink
										image={Kor90day}
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
						<section id="section8">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">Subway Tour</h1>
								<Image
									src={KoreanFood}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Discover Seoul like never before with our curated collection
									of links in the About Seoul section. Explore the vibrant
									capital city of South Korea through various resources,
									including travel guides, historical insights, local cuisine,
									cultural experiences, and more. Immerse yourself in the rich
									heritage and modern allure of Seoul as you delve into these
									handpicked links that showcase the citys unique charm and
									offer a deeper understanding of its fascinating culture.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Seoul}
										link="https://truecloset.tistory.com/91"
										title="영어 작문을 도와주는 사이트 모음 -"
										description="Explore this handy collection of grammar and spelling check
									tools for English, designed to help you enhance your writing
									skills and ensure accuracy in your written communication."
									/>
									<PictureWithLink
										image={Kor90day}
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
						<section id="section9">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">Art Spot</h1>
								<Image
									src={KoreanFood}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Discover Seoul like never before with our curated collection
									of links in the About Seoul section. Explore the vibrant
									capital city of South Korea through various resources,
									including travel guides, historical insights, local cuisine,
									cultural experiences, and more. Immerse yourself in the rich
									heritage and modern allure of Seoul as you delve into these
									handpicked links that showcase the citys unique charm and
									offer a deeper understanding of its fascinating culture.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Seoul}
										link="https://truecloset.tistory.com/91"
										title="영어 작문을 도와주는 사이트 모음 -"
										description="Explore this handy collection of grammar and spelling check
									tools for English, designed to help you enhance your writing
									skills and ensure accuracy in your written communication."
									/>
									<PictureWithLink
										image={Kor90day}
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
						<section id="section10">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">Exhibition</h1>
								<Image
									src={KoreanFood}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Discover Seoul like never before with our curated collection
									of links in the About Seoul section. Explore the vibrant
									capital city of South Korea through various resources,
									including travel guides, historical insights, local cuisine,
									cultural experiences, and more. Immerse yourself in the rich
									heritage and modern allure of Seoul as you delve into these
									handpicked links that showcase the citys unique charm and
									offer a deeper understanding of its fascinating culture.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Seoul}
										link="https://truecloset.tistory.com/91"
										title="영어 작문을 도와주는 사이트 모음 -"
										description="Explore this handy collection of grammar and spelling check
									tools for English, designed to help you enhance your writing
									skills and ensure accuracy in your written communication."
									/>
									<PictureWithLink
										image={Kor90day}
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

export default AllAboutSeoulPage;
