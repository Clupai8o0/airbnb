import Head from "next/head";

import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
	return (
		<div className="">
			<Head>
				<title>Airbnb</title>
				<link rel="icon" href="/icon.png" />
			</Head>

			<Header />
			<Banner />

			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{/* pull some data from a server */}
						{exploreData?.map(({ img, distance, location }) => (
							<SmallCard
								img={img}
								distance={distance}
								location={location}
								key={img}
							/>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-4xl font-semibold py-8">Live anywhere</h2>

					<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
						{cardsData.map(({ img, title }) => (
							<MediumCard img={img} title={title} key={img} />
						))}
					</div>
				</section>

				<LargeCard
					img="https://links.papareact.com/4cj"
					title="The greatest outdoors"
					description="Wishlists curated by Airbnb"
					buttonText="Get Inspired"
				/>

        <Footer />
			</main>
		</div>
	);
}

// static side rendering
export async function getStaticProps() {
	const exploreData = await fetch("https://links.papareact.com/pyp").then(
		(res) => res.json()
	);

	const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
		res.json()
	);

	return {
		props: {
			exploreData,
			cardsData,
		},
	};
}
