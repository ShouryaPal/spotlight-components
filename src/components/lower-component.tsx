import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { spotlightCards } from "../app/data";
import SpotlightCards from "./spotlight-card";

const Lower = () => {
	return (
		<div className="w-auto h-auto bg-gradient-to-t from-dark-up to-dark-down">
			<div className="p-8 flex flex-col items-center justify-between gap-4">
				<h1 className="font-Poppins text-6xl dark:text-white font-semibold">
					Collection Spotlight
				</h1>
				<p className="text-lg dark:text-white text-center">
					Discover extraordinary moments with our Spotlight Collection
					metatickets—exclusive access to premium events for an unforgettable
					experience. Grab yours today!
				</p>
				<Carousel className="max-w-4xl">
					<CarouselContent>
						{spotlightCards.map((d, i) => (
							<CarouselItem key={`${i + 1}`} className="basis-1/3">
								<SpotlightCards
									image={d.image}
									name={d.name}
									date={d.date}
									day={d.day}
									time={d.time}
									location={d.location}
									btn={d.btn}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="bg-transparent rounded-none h-14 border-2 text-dark-btn border-dark-btn hover:bg-inherit hover:text-blue-300" />
					<CarouselNext className="bg-transparent rounded-none h-14 border-2 text-dark-btn border-dark-btn hover:bg-inherit hover:text-blue-300" />
				</Carousel>
			</div>
		</div>
	);
};

export default Lower;
