import Lower from "@/components/lower-component";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Upper from "@/components/upper-component";

export default function Home() {
	return (
		<div className="w-full h-full pb-4 bg-dark-primary-bg">
			<div className="px-40 pt-10">
				<div className="flex justify-end">
					<ModeToggle />
				</div>
				<div className="flex flex-col gap-10">
					<Upper />
					<Button className="w-[150px] h-[50px] self-center rounded-none bg-dark-btn text-base shadow-[0_4px_8px_0_rgba(0,0,0,0.05)] hover:bg-dark-line">
						See More
					</Button>
					<Lower />
				</div>
			</div>
		</div>
	);
}
