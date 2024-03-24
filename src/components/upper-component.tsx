import PlayersCard from "@/components/players-card";
import { playerCards } from "../app/data";
import Ad from "@/components/ad";
import { Button } from "./ui/button";

const Upper = () => {
	return (
		<>
			<div className="w-fit flex flex-col gap-0">
				<h1 className="font-Poppins dark:text-white font-semibold text-2xl">
					Sports
				</h1>
				<div className="w-auto h-[2px] bg-dark-line" />
			</div>
			<div className="flex items-center justify-between gap-2">
				{playerCards.map((d, i) => (
					<PlayersCard
						key={`${i + 1}`}
						image={d.image}
						name={d.name}
						totalEvents={d.totalEvents}
						sport={d.sport}
					/>
				))}
				<Ad />
			</div>
			
		</>
	);
};

export default Upper;
