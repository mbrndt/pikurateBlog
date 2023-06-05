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
import Expat from "../../assets/expat.jpg";
import SeoulNight from "../../assets/seoulNight.jpg";
import Restaurant from "../../assets/Restaurant.jpg";
import NSeoulTower from "../../assets/NSeoulTower.jpg";
import Hangang from "../../assets/Hangang.jpg";
import Evening from "../../assets/Evening.jpg";
import Subway from "../../assets/subway.jpg";
import Gate from "../../assets/gate.jpeg";
import Gate2 from "../../assets/gate2.jpeg";
import Gangnam from "../../assets/gangnam.jpeg";
import Songpa from "../../assets/Songpa.bmp";
import Bukchon from "../../assets/Bukchon.jpeg";
import LotteWorld from "../../assets/LotteWorld.bmp";
import Dongdaemun1 from "../../assets/Dongdaemun.jpeg";
import Prison from "../../assets/prison.bmp";
import Samcheongdong from "../../assets/Samcheong-dong.jpeg";
import Namsan from "../../assets/namsan.bmp";
import Yeouido from "../../assets/Yeouido.jpeg";
import Gwangjang1 from "../../assets/gwangjang.webp";
import Haneul from "../../assets/Haneul.jpeg";
import Itaewon from "../../assets/Itaewon.jpeg";
import Starbucks from "../../assets/starbucks.jpeg";
import Subway7 from "../../assets/Subway7.jpeg";
import OlympicPark from "../../assets/OlympicPark.bmp";
import Subway8 from "../../assets/Subway8.jpeg";
import Banpodaegyo from "../../assets/Banpodaegyo.jpeg";
import Square from "../../assets/63Square.jpeg";
import Art from "../../assets/art.jpg";
import Frieze from "../../assets/frieze.jpeg";
import Kiaf from "../../assets/kiaf.jpeg";
import art2 from "../../assets/art2.webp";
import art3 from "../../assets/art3.webp";
import art4 from "../../assets/art4.webp";
import art5 from "../../assets/art5.webp";
import exib from "../../assets/exib.jpg";
import MMCA from "../../assets/MMCA.png";
import SMOA from "../../assets/SMOA.png";
import NMOK from "../../assets/NMOK.png";
import Leuum from "../../assets/leuum.jpeg";
import apma from "../../assets/apma.jpeg";
import daelim from "../../assets/daelim.jpeg";
import songeun from "../../assets/songeun.webp";
import spacek from "../../assets/spacek.jpeg";
import coreana from "../../assets/coreana.png";
import artsy from "../../assets/artsy.jpeg";

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
									src={SeoulNight}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Immerse yourself in the vibrant and diverse nightlife of Seoul
									with our guide to the city&apos;s after-dark scene. Seoul
									comes alive at night, offering a plethora of entertainment
									options for all tastes. Experience the bustling streets lined
									with lively bars, cozy pubs, and karaoke rooms where you can
									sing your heart out. Explore the trendy neighborhoods known
									for their hip cafes, rooftop bars, and stylish lounges.
									Indulge in the culinary delights of the city&apos;s night
									markets and late-night food stalls. From live music
									performances to cultural shows, Seoul&apos;s nightlife has
									something for everyone. Prepare to immerse yourself in the
									pulsating energy of Seoul&apos;s night scene and create
									unforgettable memories in this vibrant city that never sleeps.{" "}
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Expat}
										link="https://www.expatinfodesk.com/destinations/seoul/entertainment/night-life"
										title="Popular Spots for Expats"
										description="Seoul’s night life is by far some of the best in the world. There are new places that spring up nearly every hour and nightly specials on everything from costume parties at posh clubs with world renowed DJ’s to thirty cent buffalo chicken wings on Tuesdays. Much like NYC you have to stay on top of the social scene in Seoul otherwise you will be left behind, and the native Seoulites are some of the best in the world at this. Below you will find just a few but to the only way to really know what is hot each week, is to pick up an expat magazine or ask around."
									/>
									<PictureWithLink
										image={Restaurant}
										link="https://www.koreatravelpost.com/nightlife-in-seoul/"
										title="A Complete Guide to Nightlife in Seoul, South Korea"
										description="Seoul has one of the most dynamic nightlife scenes in Asia. Because of it, Seoul is an ideal destination for party animals and night owls. Some might even find it hard to keep up with the locals! 
Well, grab your party pants and top up your glass with soju to read everything about Seoul’s nightlife."
									/>
									<PictureWithLink
										image={NSeoulTower}
										link="https://fr.hotels.com/go/south-korea/best-seoul-nightlife"
										title="15 Best Things to Do After Dinner in Seoul"
										description="Seoul also has vibrant shopping districts that transform into cultural spaces, with fashion shows, dance performances, and live concerts taking place year-round. Experience the best of South Korea's night-time attractions with our rundown of where to go and what to do at night in Seoul."
									/>
									<PictureWithLink
										image={Hangang}
										link="https://www.nightflow.com/seoul-nightlife/"
										title="Seoul Nightlife • A Complete Guide"
										description="Welcome to Seoul’s #1 nightlife guide. On this page, you’ll discover the vibrant and varied nightlife scene in Seoul. You’ll find the perfect venue for you and your preferred night out. Whether you want to go all-out clubbing or if you’d like a more laid back dinner and drinks with a view, we’ve got your covered."
									/>
									<PictureWithLink
										image={Evening}
										link="https://www.wapititravel.com/blog/en/things-to-do-in-seoul-at-night/"
										title="26 EPIC Things To Do In Seoul At Night (2023 guide)"
										description="From all-night saunas and PC bangs (internet cafés and gaming centers) to other events both mysterious and exotic, Seoul will keep you awake for all the best reasons. So in this Seoul travel blog post, we share the best things to do at night in Seoul."
									/>
								</div>
							</div>
						</section>
						<section id="section8">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">Subway Tour</h1>
								<Image
									src={Subway}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Embark on an exciting adventure through Seoul&apos;s subway
									system with our immersive subway tours. Explore the
									city&apos;s iconic landmarks, hidden gems, and cultural
									hotspots conveniently connected by the extensive subway
									network. Our carefully curated tours provide you with detailed
									itineraries, including must-visit stations, transfer points,
									and points of interest along the way. Discover the rich
									history, vibrant neighborhoods, and breathtaking views as you
									navigate Seoul&apos;s subway routes. Whether you&apos;re a
									history buff, a food enthusiast, or simply curious about the
									city&apos;s diverse attractions, our subway tours offer an
									engaging and convenient way to experience Seoul&apos;s unique
									charm. Hop on board and let the subway be your guide to a
									memorable journey through the heart of the city.{" "}
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Gate}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_ENG_2_10.jsp"
										title="Korea Tour by Seoul Subway Line 1"
										description="Seoul Subway Line 1 runs from Uijeongbu and Dong-Ducheon in the north to Suwon, Cheonan and areas of Chungcheongnam-do in the south. Not only does the route itself have a long history, the line also passes through downtown Seoul and many historically significant attractions as well as shopping centers."
									/>
									<PictureWithLink
										image={Gate2}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=264257"
										title="DESTINATIONS BY REGION - Sungnyemun Gate (숭례문)"
										description="Sungnyemun Gate is Korea’s National Treasure No. 1, and its unofficial name is Namdaemun Gate. Sungnyemun Gate is the largest castle gate stone structure with an arched entrance in the middle. There’s a column on top of a platform, raising the roof, distinguishing the upper stories and lower stories of the building. Passageways for traffic are located at the east and west ends of the gate. Different from the other gates, Sungnyemun Gate’s tablet has its name written vertically."
									/>
									<PictureWithLink
										image={Gangnam}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_ENG_2_10_2.jsp"
										title="Korea Tour by Seoul Subway Line 2"
										description="Seoul Subway Line 2 connects many of the major downtown areas in Seoul and thus serves as an ideal mean of transportation throughout the city. Major stops along this circular line include Hongik Univ., City Hall, Euljiro1(il)-ga, and Dongdaemun History & Culture Park Stations north of Hangang River, as well as Gangnam, Jamsil, and Samseong Stations in the southern region. Starting from City Hall Station, travelers can explore popular districts such as Hongdae, Edae, Gangnam, and Jamsil or visit the numerous parks, museums and art galleries located near the subway stations."
									/>
									<PictureWithLink
										image={Songpa}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=1542646"
										title="DESTINATIONS BY REGION - Songpa Naru Park (Seokchonhosu Lake) (송파나루공원 (석촌호수))"
										description="Songpa Naru Park, also commonly referred to as Seokchonhosu Lake, is a citizen park in Seoul with a jogging course and walking trails. It has two lakes with Songpa-daero Boulevard running in between. Originally, a branch of the Hangang River ran through the site, forming one large lake, but the lake was divided into two with the construction of Songpa-daero Boulevard."
									/>

									<PictureWithLink
										image={Bukchon}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_ENG_2_10_3.jsp"
										title="Korea Tour by Seoul Subway Line 3"
										description="Seoul Subway Line 3 connects northwestern Seoul to the southeastern tip of the city. The northwestern section of Line 3 includes the city of Goyang in Gyeonggi-do and the southeastern section runs to Ogeum in the Songpa-gu district of Seoul. Line 3 gives travelers the option of exploring a wide variety of fun-filled attractions, including Gyeongbokgung Palace, Bukchon Hanok Village, Samcheongdong-gil Road, Sinsa-dong Garosu-gil Road, Garak Market, and much more."
									/>
									<PictureWithLink
										image={LotteWorld}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=264152"
										title="DESTINATIONS BY REGION - Lotte World (롯데월드)"
										description="Lotte World Adventure is the world's largest indoor amusement park, complete with top-of-the-line rides, fantastic parades and performances, and food from around the world. The Folk Museum displays miniature models of Korea throughout 5,000 years in history. "
									/>
									<PictureWithLink
										image={Dongdaemun1}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_ENG_2_10_4.jsp"
										title="Korea Tour by Seoul Subway Line 4"
										description="Seoul Subway Line 4 extends from the heart of Seoul to Oido Island, offering diverse travel options that include major cultural and artistic attractions, as well as a coastal trip just on the outskirts of Seoul. Travelers can enjoy the zestful energy at youth-driven areas of the city, such as performing arts and plays along Daehangno Street, view the talented work of up-and-coming artists and purchase their latest collections at Dongdaemun and Dongdaemun Design Plaza (DDP), or experience Korea’s movie culture at Chungmuro Movie Street."
									/>
									<PictureWithLink
										image={Prison}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=268143"
										title="DESTINATIONS BY REGION - Seodaemun Prison History Museum (서대문형무소역사관)"
										description="Seodaemun Prison was built under the Japanese administration to imprison independence movement activists. It first opened on October 21, 1908 under the name Gyeongseong Prison. Eventually, so many activists were imprisoned that the building had to be expanded. At that time, the name changed to Seodaemun Prison on September 3, 1912. Eighty years later, the prison was turned into Seodaemun Independence Park on August 15, 1992 to commemorate the Korean patriots who were tortured in prison, giving their lives for freedom."
									/>
									<PictureWithLink
										image={Samcheongdong}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=264473"
										title="DESTINATIONS BY REGION - Samcheong-dong Street (삼청동길)"
										description="It is said that Samcheong-dong was named from the story about the three 'cheong' (Chinese character meaning clean) of the area, namely the mountain, water, and people. Another theory is that the origin of the region's name came from Samcheongjeon Hall where three tablets called 'Taecheong,' 'Sangcheong,' and 'Okcheong,' were set up based on Taoism. Samcheong-dong Street features a mixture of old scenes of hanok buildings with traditional beauty and modern scenes of galleries and cafés, creating a unique atmosphere."
									/>
									<PictureWithLink
										image={Namsan}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=264550"
										title="DESTINATIONS BY REGION - Namsan Seoul Tower (남산서울타워)"
										description="Namsan Seoul Tower was the first multipurpose tower to be established in Korea, effectively incorporating a sightseeing observatory to a broadcasting tower. For the past 40 years, Namsan Seoul Tower has served as an iconic landmark of Korea and a representative tourist attraction. The tower's observatory offers an unobstructed view of the whole city, allowing it to become one of the all-time favorite attractions of Seoul citizens as well as domestic and international tourists."
									/>
									<PictureWithLink
										image={Yeouido}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_ENG_2_10_5.jsp"
										title="Korea Tour by Seoul Subway Line 5"
										description="The stations on Seoul Subway Line 5 offer a plethora of attractions and restaurants. Gwanghwamun Square provides citizens and visitors a relaxing rest area within the city. Along Line 5 is also Gwangjang Market, where visitors can find delicious food such as jokbal (pig’s trotters), yukhoe (beef tartare), and nakji tangtangi (chopped live octopus). Whether it’s a relaxing park, exciting traditional market, or a spectacular night view you’re looking for, Line 5 has it all."
									/>
									<PictureWithLink
										image={Gwangjang1}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=268143"
										title="WHERE TO SHOP - Gwangjang Market (광장시장)"
										description="Gwangjang Market was the first permanent market in Korea and continues to thrive as a popular tourist destination today. The name Gwangjang means 'to gather from afar and keep altogether.' The market began as a small trading center that brought in goods from nearby regions, but has now grown into a large wholesale market selling a variety of goods, including upholstery, imported goods, groceries, dried fish, traditional goods, and more."
									/>
									<PictureWithLink
										image={Haneul}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_ENG_2_10_6.jsp"
										title="Seoul Tour by Subway Line 6"
										description="Seoul Subway Line 6 allows travelers to explore every corner of Seoul, including the past, present, and future in places like the state-of-the-art digital media entertainment cluster and traditional markets. You can go for a stroll around Mangwon Hangang Park along the Hangang River located near subway stations."
									/>
									<PictureWithLink
										image={Itaewon}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=264358"
										title="DESTINATIONS BY REGION - Itaewon Special Tourist Zone (이태원 관광특구)"
										description="The name Itaewon started to spread worldwide in the 1980s when Korea hosted the 1986 Seoul Asian Games and the 1988 Seoul Olympic Games, as well as many international conferences. Since then, Itaewon has become a popular travel destination. Clothes and accessories with unique designs, and leather products in particular are famous. "
									/>
									<PictureWithLink
										image={Subway7}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_ENG_2_10_7.jsp"
										title="Korea Tour by Seoul Subway Line 7"
										description="Seoul Subway Line 7 spans a wide area extending from Dobongsan Mountain through the south and southwestern parts of Seoul to Gwangmyeong, Gyeonggi-do and Incheon. Travelers can experience the lively energy of traditional markets and modern shopping streets, as well as the mystical ambience of a well-equipped cave. People are also invited to enjoy exceptional facilities standing in harmony with the Hangang River, or take a stroll through an urban forest."
									/>
									<PictureWithLink
										image={Starbucks}
										link="https://mustsharenews.com/starbucks-wave/"
										title="Seoul’s Starbucks Wave Floats On The Han River, Stacked Glass Walls Create Illusion"
										description="Unlike a typical Starbucks cafe decked out in wood & forest green panels, this branch literally floats. This means you may feel like you’re riding on a cruise ship as the building appears to be hovering on the surface of the water."
									/>
									<PictureWithLink
										image={Subway8}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_ENG_2_10_8.jsp"
										title="Korea Tour by Seoul Subway Line 8"
										description="Connecting the southeastern part of Seoul from Amsa-dong in Seoul to Seongnam in Gyeonggi-do, subway line 8 has a plethora of tourist destinations from a UNESCO World Heritage Site to other cultural, artistic and historical attractions. The area around Lotte World and Songpa Naru Park (Seokchonhosu Lake) has been designated as a special tourism district in Seoul for being a one-stop destination for shopping, leisure and entertainment."
									/>
									<PictureWithLink
										image={OlympicPark}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=789703"
										title="DESTINATIONS BY REGION - Olympic Park (올림픽공원)"
										description="Olympic Park is an impressive leisure facility in which historic remains from the Baekje era share space with modern, state-of-the-art sports stadiums, an eco-friendly forest, and spacious grass fields. The legacy of the 1988 Seoul Olympics, the park not only houses the country’s largest sports arena, but has also become a place where Seoul residents come to relax and unwind."
									/>
									<PictureWithLink
										image={Banpodaegyo}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_ENG_2_10_9.jsp"
										title="Korea Tour by Seoul Subway Line 9"
										description="Subway Line 9 connects stations situated along the Hangang River’s southern bank, from Gimpo Airport to major tourist attractions in Seoul. Start off in Yeouido, Korea's financial hub, take a stroll along the Hangang Park nearby, do some souvenir shopping at a mall or traditional market, and find peace at a temple in the heart of the city. In particular, Seonyudo Park, Yeouido Saetgang Ecological Park and Banpo Hangang Park have beautifully harmonized nature with the forest of buildings."
									/>
									<PictureWithLink
										image={Square}
										link="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=264122"
										title="DESTINATIONS BY REGION - 63 Square (63스퀘어)"
										description="With 63 floors measuring a total height of 249 meters, 63 Square is one of Korea’s tallest and most recognized skyscrapers. 63 Square boasts spectacular views of the Hangang River and the surrounding Bugaksan, Namsan and Gwanaksan Mountains. The building also offers an outstanding vantage point when viewing the sunset over the city."
									/>
								</div>
							</div>
						</section>
						<section id="section9">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">Art Spot</h1>
								<Image
									src={Art}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Unleash your creativity and immerse yourself in the
									captivating world of art in Seoul. Our art section is
									dedicated to showcasing the city&apos;s vibrant art scene,
									from contemporary galleries to traditional museums. Explore
									thought-provoking exhibitions, marvel at intricate sculptures,
									and appreciate diverse art forms that reflect the rich
									cultural heritage of Seoul. Whether you&apos;re an art
									enthusiast or simply seeking inspiration, Seoul offers a
									multitude of artistic experiences that will ignite your
									imagination and leave you with a deeper appreciation for the
									transformative power of art. Prepare to be captivated by the
									beauty, innovation, and artistic expression that permeate
									every corner of this dynamic city.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={Frieze}
										link="https://www.frieze.com/fairs/frieze-seoul"
										title="Frieze Seoul"
										description="Frieze Seoul is a new international art fair by the team behind premium art fairs such as Frieze London, Frieze Masters, Frieze New York and Frieze Los Angeles. The second edition will take place from September 6-9, 2023 at COEX, in the Gangnam district in the heart of Seoul. Patrick Lee is the Director of Frieze Seoul."
									/>
									<PictureWithLink
										image={Kiaf}
										link="https://kiaf.org/"
										title="Kiaf SEOUL"
										description="Kiaf SEOUL first opened in 2002 to develop the foundation of Korean art and introduce contemporary Korean art to the international audience. Kiaf SEOUL established itself as an international art fair where visitors can experience the globalized contemporary art and closely examine the trend of the art market."
									/>
									<PictureWithLink
										image={art2}
										link="https://theculturetrip.com/asia/south-korea/articles/an-art-lovers-guide-to-seoul-in-24-hours/"
										title="An Art Lover's Guide to Seoul in 24 hours"
										description="Catering to a variety of tastes, Seoul’s art scene is one of the most unique in the region. Here are the best destinations for art lovers for when you only have 24-hours to explore."
									/>
									<PictureWithLink
										image={art3}
										link="https://www.klook.com/en-PH/blog/art-spots-seoul/"
										title="5 Secret Art Spots in Seoul that Even Tour Guides Won’t Tell You About"
										description="With our guide on artsy places around Seoul, we’ll let you in on some of the recommendations from the trendy Korean youth"
									/>
									<PictureWithLink
										image={art4}
										link="https://www.wallpaper.com/art/seoul-tour-art-and-culture"
										title="Seoul tour: a culture trip through the South Korean capital"
										description="With new galleries and bustling bars, all eyes are on the South Korean capital. Our ‘Postcard from Seoul’ guided tour explores the cultural must-sees of the moment"
									/>
									<PictureWithLink
										image={art5}
										link="https://ocula.com/cities/south-korea/seoul-art-galleries/"
										title="Seoul Art Guide PRESENTED BY Kiaf"
										description="Ocula Member Galleries are selected by a committee of respected gallerists with the purpose of presenting only the best of contemporary art on Ocula."
									/>
								</div>
							</div>
						</section>
						<section id="section10">
							{/* blog cards */}
							<div className="flex flex-col items-center">
								<h1 className="text-4xl m-5 capitalize">Exhibition</h1>
								<Image
									src={exib}
									alt=""
									className=" justify-center rounded-lg w-3/4 h-3/4 md:h-1/2 md:w-1/2"
								/>
								<p className="bg-gray-50 rounded-lg w-3/4 p-4 my-5 ">
									Step into a world of creativity and inspiration with our
									curated collection of exhibitions in Seoul. Discover the
									city&apos;s vibrant art scene through a variety of captivating
									showcases, from contemporary art exhibitions pushing
									boundaries to curated retrospectives of renowned artists.
									Immerse yourself in thought-provoking installations, explore
									immersive multimedia displays, and engage with interactive
									exhibits that challenge your perspective. Whether you&apos;re
									a seasoned art lover or simply curious about the artistic
									expression, these exhibitions offer a unique opportunity to
									delve into the diverse and dynamic world of visual arts. Get
									ready to embark on a journey of discovery and be captivated by
									the beauty, innovation, and storytelling that each exhibition
									brings to life.
								</p>
								<div className="flex items-center gap-5 border-b mt-5 flex-col">
									<PictureWithLink
										image={MMCA}
										link="https://www.mmca.go.kr/eng/visitingInfo/seoulInfo.do"
										title="National Museum of Modern and Contemporary Art, Seoul"
										description="Since its foundation in 1969, the National Museum of Modern and Contemporary Art, Korea, also known as MMCA, has shared its history with that of Korea’s modern and contemporary art and became one of the most iconic cultural spaces in the nation.

										By opening additional museums in Gwacheon in 1986, Deoksugung in 1998, Seoul in 2013, and Cheongju in 2018, we have four major establishments that are unique and organically affiliated."
									/>
									<PictureWithLink
										image={SMOA}
										link="https://sema.seoul.go.kr/en/index"
										title="Seoul Museum of Art"
										description="The Seoul Museum of Art is a network museum that users, mediators, and producers are building together."
									/>
									<PictureWithLink
										image={NMOK}
										link="https://www.museum.go.kr/site/eng/home"
										title="National Museum of Korea"
										description="Visitors can fully enjoy its six galleries in the Permanent Exhibition Hall arranged by period and theme, special exhibition galleries that feature various contents, diverse guided-tour programs to deepen one’s understanding, the Children's Museum where kids are able to enjoy and experiment with the five senses, a variety of educational programs, and immersible AR and VR contents using advanced IT technology."
									/>
									<PictureWithLink
										image={Leuum}
										link="https://www.leeum.org/index.asp?lang=eng"
										title="Leeum, Museum of Art"
										description="The Leeum, Samsung Museum of Art is a museum in Hannam-dong, Yongsan-gu, Seoul, South Korea, run by the Samsung Foundation of Culture. It consists of two parts that house traditional Korean art and contemporary art."
									/>
									<PictureWithLink
										image={apma}
										link="https://apma.amorepacific.com/index.do"
										title="APMA (Amorepacific Museum of Art)"
										description="Aiming for 'an open space to find beauty in the ordinary', this museum was established as a space for fostering open communication. To this end, the museum collects, studies, and exhibits anicent Korean and contemporary arts, also supporting researchers, academic societies, and young writers in the process."
									/>
									<PictureWithLink
										image={daelim}
										link="https://www.daelimmuseum.org/"
										title="Daelim Museum"
										description="Located in the residential neighbourhood of Tongui-dong, near historic Gyeongbokgung Palace, Daelim Museum began its life as Korea’s first photography
										museum. Today, it holds exhibitions that embrace not only photography but also design and a range of other fields, while continuing to expand its own
										boundaries."
									/>
									<PictureWithLink
										image={songeun}
										link="https://www.daelimmuseum.org/"
										title="SONGEUN Art and Cultural Foundation"
										description="The foundation’s name derives from the founding father’s nom de plume, “SONGEUN”, translating to ‘hidden pine tree’ as a means of capturing the spirit of the foundation’s deeply rooted mission to support emerging artists. In 2001, the foundation initiated the SONGEUN Art Award to foster promising contemporary Korean artists and further propel the careers of the awardees. In September 2021, SONGEUN unveiled its new space designed by the renowned Swiss architecture firm, Herzog & de Meuron, as their first-ever realized project in Korea. "
									/>
									<PictureWithLink
										image={spacek}
										link="https://www.spacek.co.kr/index.do"
										title="Space K"
										description="Space K is established in 2011 to foster art culture by Kolon group.
										Setting forth initiative to support art and aiming to share with local community, Kolon group is introducing Space K, a non-profit gallery.
										Space K strives to focus on creativity of artists and present innovative and distinguished contents for the community."
									/>
									<PictureWithLink
										image={coreana}
										link="http://www.spacec.co.kr/en/gallery/gallery1"
										title="Coreana Museum of Art"
										description="The Coreana Cosmetic Museum is a museum in Seoul, South Korea. It is related to the Korean Coreana cosmetics company. Its collection is based on 53,000 items collected by Dr. Yu Sang-Ok, one of the executive directors of Coreana."
									/>
									<PictureWithLink
										image={artsy}
										link="https://www.artsytravels.com/asia/the-best-korean-contemporary-art-galleries-in-seoul/"
										title="The Best Korean Contemporary Art Galleries In Seoul"
										description=" Located mostly in the same area, around the former imperial palace, Gyeongbokgung Palace, they can be easily visited in one day, walking along the beautiful palaces gardens. The perfect itinerary to pair with a visit to the MMCA or the many other contemporary art exhibition spaces around the same area. "
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
