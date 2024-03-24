import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	image: any;
	name: string;
	date: string;
	day: string;
	time: string;
	location: string;
	btn: string;
};

const SpotlightCards = ({image,name,date,day,time,location,btn}: Props) => {
	return (
		<div className="w-fit h-fit bg-dark-card-bg pt-2 pb-2 dark:shadow-[0_4px_8px_0_rgba(0,0,0,0.05)] shadow-[0_8px_16px_0_rgba(0,0,0,0.1)]   relative overflow-hidden">
			<div className="flex flex-col items-center gap-2">
				<div className="relative w-full h-full">
					<Image
						src={image}
						alt={image}
						className="w-auto h-auto object-cover"
					/>
					<div className="w-5 h-5 rounded-full absolute bg-dark-circle -bottom-4.5 -right-2.5 shadow-[]" />
					<div className="w-5 h-5 rounded-full absolute bg-dark-circle -bottom-4.5 -left-2.5" />
				</div>
				<div className=" h-[1px] w-full border border-dashed border-gray-300" />
				<div className="flex flex-col items-center gap-2">
					<h1 className="text-xl font-semibold font-Poppins dark:text-white">
						{name}
					</h1>
					<div className="flex items-center divide-x-2">
						<p className="px-2 text-xs dark:text-white font-Poppins">
							{date}
						</p>
						<p className="px-2 text-xs dark:text-white font-Poppins">{day}</p>
						<p className="px-2 text-xs dark:text-white font-Poppins">
							{time}
						</p>
					</div>
					<p className="text-xs text-dark-card-detail-title">{location}</p>
					<Button className="bg-black dark:text-white text-xs rounded-none w-full">
						{btn}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SpotlightCards;
