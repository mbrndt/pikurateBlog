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
import Delivery from "../../assets/deliveryapps.webp";
import Market from "../../assets/market.jpeg";
import Gwangjang from "../../assets/gwangjang.webp";
import Kimbap from "../../assets/kimbap2.webp";
import Bibimbap from "../../assets/bibimbap.webp";
import Food from "../../assets/food.jpg";
import EatDrink from "../../assets/eatdrink.jpg";
import Beer from "../../assets/beer.jpg";
import Dongdaemun from "../../assets/Dongdaemun.png";
import BHC from "../../assets/BHC.png";
import ChilChil from "../../assets/ChilChil.png";
import DonChicken from "../../assets/DonChicken.png";
import Unique from "../../assets/unique.jpg";
import seoulRain from "../../assets/seoulRain.jpg";
import seoulEyes from "../../assets/seoulEyes.jpeg";
import Bridge from "../../assets/Bridge.jpg";
import Nightclub from "../../assets/nightclub.jpg";
import Octagon from "../../assets/octagon.webp";
import Nightlife from "../../assets/nightclub.webp";
import yt1 from "../../assets/yt1.webp";
import club2 from "../../assets/club2.webp";
import club3 from "../../assets/club3.webp";

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
						Unique Spots
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
									Embark on a gastronomic journey through Seoul with our link
									list highlighting the diverse and mouthwatering food scene of
									the city. Indulge in traditional Korean dishes like succulent
									barbecued meats, savory kimchi, and comforting bibimbap.
									Venture into bustling street markets to savor an array of
									street food delights, from crispy fried chicken and spicy
									tteokbokki to steaming hot dumplings. Explore hidden gems and
									trendy cafes offering unique fusion cuisines and international
									flavors. Get ready to tantalize your taste buds and discover
									the culinary treasures that Seoul has to offer.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Delivery}
										link="https://10mag.com/top-5-food-delivery-apps-in-korea-and-how-to-use-them/"
										title="Top 6 Food Delivery Apps in Korea and How to Use Them"
										description="Korea is known for its efficient and fast delivery food service. You can order anything from chicken wings and burgers to rice noodles and kimchi jjigae, and you can get even vegan food delivered easily. If you’re not completely confident in your Korean speaking abilities (check out our 10 Free Apps for Learning Korean), there are various Korean food delivery apps in Korea available to erase the anxiety of ordering over the phone. This article will be a comprehensive guide about which foreigner-friendly food delivery apps in Korea to download, how to use them, and key Korean phrases to remember for a great restaurant delivery service."
									/>
									<PictureWithLink
										image={Market}
										link="https://www.travelmag.com/articles/vegan-eats-in-seoul/"
										title="Like a Local: Vegan Eats in Seoul"
										description="Travelling anywhere as a vegan can be a certified nightmare if you don’t know where to eat, especially in South Korea’s meat-loving capital, Seoul, where guide books are saturated with barbecue and fried chicken restaurants. But in recent years, things have been changing rapidly, particularly in regard to veganism. Seoul’s vegan restaurants are offering their own tastes to the global market."
									/>
									<PictureWithLink
										image={Gwangjang}
										link="https://theculturetrip.com/asia/south-korea/articles/the-best-places-to-try-street-food-in-seoul/"
										title="The Best Places to Try Street Food in Seoul"
										description="With an apparently infinite number of vendors serving up street treats such as hotteok (stuffed pancake), tteokbokki (spicy rice cakes) and odeng (fish cake), Seoul is essentially one big open-air restaurant. Cheap, hearty and delicious, Seoul street food is a must-try on any visit to the capital of South Korea – but if you’re looking for diversity and accessibility, these are some of the best places to sample it."
									/>
									<PictureWithLink
										image={Kimbap}
										link="https://girleatworld.net/south-korean-food/"
										title="What to eat in Seoul: 12 Traditional Korean Food You Must Eat in Seoul"
										description="My love affair with South Korean food started way, way back. As a teenager, I grew up in a community dominated by South Korean immigrants in California. Many of my high school friends were either immigrants from South Korea or descendants of one. When I got to college, my roommates were both Koreans who loved going for a meal in LA’s Korea town or cooking meals at home. It was from hanging out with them that I became very well-versed in South Korean cuisine despite not speaking much Korean."
									/>
									<PictureWithLink
										image={Bibimbap}
										link="https://theculturetrip.com/asia/south-korea/articles/14-mouth-watering-south-korean-foods-to-try/"
										title="The Top South Korean Foods to Try"
										description="In recent years South Korea has become better known for its technology than its food. However, thanks to delicacies like kimchi, which has become a global sensation, things are beginning to change. Here are is a list of South Korean foods you have to try."
									/>
									<PictureWithLink
										image={Food}
										link="https://www.theguardian.com/travel/2012/nov/28/seoul-south-korea-food-guide-dishes"
										title="Seoul food: a guide to the top 10 dishes and where to try them"
										description="There is much more to Korean food than barbecue and kimchi. As BA launch direct UK flights to Seoul on 2 December, here's a guide to the favourite dishes in South Korea's food-mad capital"
									/>
									<PictureWithLink
										image={EatDrink}
										link="https://www.trazy.com/theme/eat_drink_local_in_seoul"
										title="Eat and drink like an authentic local in Seoul"
										description="You might think Korean people only eat kimchi and rice and only drink soju ? Wrong. Korea owns a wide variety of alcoholic drinks which can satisfy the taste of everyone and offers different kind of food. Drinking is part of culture in Korea and it has to be served at the same time with food. Trazy has selected all the best restaurants where you can drink soju, makgeolli and beer with the best Samgyeopsal, Pajeon and Chicken"
									/>
								</div>
							</div>
						</section>
						<section id="section4">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">Chicken and Beer</h1>
								<Image
									src={Beer}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Indulge in the perfect combination of chicken and beer in
									Seoul with our curated list of Google Map links. Discover the
									best spots in the city to enjoy this popular Korean culinary
									pairing. From cozy chicken joints to trendy beer bars, each
									link will guide you to a mouthwatering experience where you
									can savor deliciously crispy chicken and sip on refreshing
									brews. Get ready to explore Seoul&apos;s vibrant food scene
									and treat yourself to the ultimate chicken and beer feast!
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Dongdaemun}
										link="https://www.google.com/maps/@/data=!3m6!1e1!3m4!1syfymSnAjqYuMHUKoYbZzpQ!2e0!7i13312!8i6656?entry=ttu"
										title="Local style chicken and beer (Dongdaemun)"
										description="Good black pepper chicken and beer. Try the basket!"
									/>
									<PictureWithLink
										image={BHC}
										link="https://m.post.naver.com/viewer/postView.nhn?volumeNo=17157664&memberNo=15962196&vType=VERTICAL"
										title="BHC Chicken and Beer Plate (Bukhansan)"
										description="Excellent Fried Chicken Baskets. Perfect for Picnic in the forest or eating after a long hike 10/10."
									/>
									<PictureWithLink
										image={ChilChil}
										link="https://www.google.com/maps/place/%EC%8F%98%EC%8B%9C%EC%98%A4%ED%98%B8%ED%94%84%EA%B4%91%EC%9E%A5/data=!4m6!3m5!1s0x357cbb34ad9d2a0d:0x5fa620e4affb303c!8m2!3d37.5621141!4d127.0662375!16s%2Fg%2F11g0kj9gdh?entry=ttu"
										title="ChilChil Kentucky, 1st Floor Chicken and Beer(Dongdaemun)"
										description="Amazing and cheap boneless chicken. Good for parties of 2 or 3 per order. Must try for expats"
									/>
									<PictureWithLink
										image={DonChicken}
										link="https://www.google.com/maps/place/%EC%8F%98%EC%8B%9C%EC%98%A4%ED%98%B8%ED%94%84%EA%B4%91%EC%9E%A5/data=!3m1!4b1!4m6!3m5!1s0x357cbb34ad9d2a0d:0x5fa620e4affb303c!8m2!3d37.5621141!4d127.0662375!16s%2Fg%2F11g0kj9gdh?entry=ttu"
										title="동원 · 장안동 433-20번지 동대문구 서울특별시 KR"
										description="Don Chicken, open late, good chicken and beer place close to Janghanpyeong (line 5) station"
									/>
								</div>
							</div>
						</section>
						<section id="section5">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">Unique Spots</h1>
								<Image
									src={Unique}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Uncover the hidden treasures of Seoul with our chapter
									dedicated to unique and offbeat experiences in the city. Dive
									into the extraordinary side of Seoul, where you can visit
									quirky themed cafes, wander through eccentric neighborhoods,
									explore unconventional museums, engage in traditional
									activities with a modern twist, and much more. This handpicked
									collection of unique things to do in Seoul will take you off
									the beaten path and introduce you to the captivating and
									unexpected aspects of the city that you won&apos;t find in
									typical travel guides. Get ready to embark on an unforgettable
									journey of discovery and create memories that will last a
									lifetime.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={seoulRain}
										link="https://www.boboandchichi.com/99-fantastic-things-to-do-in-seoul/#Title%2011"
										title="TRULY UNIQUE THINGS TO DO IN SEOUL"
										description="This is your one stop spot for all the best things to do in Seoul by a couple of Korea lovers that called Seoul home for 3 years!"
									/>

									<PictureWithLink
										image={seoulEyes}
										link="https://cycloscope.net/things-to-do-seoul"
										title="11 (14?) weird things to do in Seoul: bulging eyes, fake beards and lots of other stuff"
										description="Things to in Seoul are plenty and so diverse, we spent 7 days here and we enjoyed every single one. Seoul ended up being one of our favorite cities in Asia.

										This article is part of our South Korea travel log series. We spent two months bicycle touring Korea off-the-beaten-path and we loved it."
									/>
									<PictureWithLink
										image={Bridge}
										link="https://www.destguides.com/south-korea/seoul/seoul/unusual-things-to-do-in-seoul"
										title="26 Unique and Unusual Things to Do in Seoul"
										description="I have combined my favourite fun and quirky things to do in Seoul that you can't miss while here. Some of the activities mentioned don't exist anywhere else in the world! So, if you are interested in finding out more, scroll down to take a look at the 26 top unusual things to do in Seoul."
									/>
								</div>
							</div>
						</section>
						<section id="section6">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">Night Clubs</h1>
								<Image
									src={Nightclub}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Experience the vibrant nightlife of Seoul with our section
									dedicated to nightclubs. Discover the pulsating beats,
									electrifying atmosphere, and world-class DJs that make
									Seoul&apos;s club scene truly exceptional. From trendy dance
									clubs to underground music venues, our curated selection of
									nightclubs offers an unparalleled opportunity to immerse
									yourself in the city&apos;s thriving nightlife. Get ready to
									dance the night away, mingle with fellow partygoers, and
									create unforgettable memories in the heart of Seoul&apos;s
									dynamic and energetic clubbing scene.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Octagon}
										link="https://fr.hotels.com/go/south-korea/best-seoul-night-clubs"
										title="5 Best Nightclubs and Karaoke in Seoul"
										description="The best nightclubs and karaoke in Seoul attract a steady clientele of local revelers and travelers looking to enjoy a fun night out in South Korea's modern capital. A favorite holiday destination for hard-core dance music fans, the capital city of South Korea hosts numerous nightclubs and bars, as well as international dance festivals such as Ultra, Seoul World DJ Festival, and World Club Dome."
									/>
									<PictureWithLink
										image={Nightlife}
										link="https://www.tripzilla.com/clubs-in-seoul/124180"
										title="12 Most Popular Bars & Clubs in Seoul to Dance the Night Away!"
										description="If you’re looking to paint the town red in Seoul, we’ve got you covered! Here’s a list of the eight best clubs in Seoul to party so you can fully experience the excitement of Seoul once the sun sets and the neon lights come on! "
									/>
									<PictureWithLink
										image={yt1}
										link="https://www.youtube.com/watch?v=iJO-Vt2mQR4"
										title="Clubbing in Korea🤪 guide for foreigners"
										description="video by Kelsey the Korean, posted on August 2022. This video is about going clubbing from a foreigner's perspective."
									/>
									<PictureWithLink
										image={club2}
										link="https://www.youtube.com/watch?v=gNvJQCi5Bgs"
										title="Ultimate Korean Clubbing Guide: What You NEED to Know about Clubs in Korea"
										description="video by Haeppy, posted on Nov 14, 2017. We talk about all you need to know about Korean clubs, from when to get there, when they are busy, how to get in, what to expect, where we go, and show you what it's like inside a real Korean club! Clubbing in Korea is one of our most favourite things to do. We recommend it to anyone who wants to go out and drink and have fun! If you're rich, get a table!"
									/>
									<PictureWithLink
										image={club3}
										link="https://www.youtube.com/watch?v=kj7K4H8-I5U"
										title="(ENG/ESP) My Korean Clubbing Guide (Hongdae, Gangnam, Itaewon, Busan) #SanJuanToSeoul EP. 15"
										description=" video by Angelita, posted on Aug 29, 2019. This is basically a list of my favorite clubs in Seoul and how to get to them! Learn in 1 video what I learned in a year lmao."
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
