import Image from "next/image";
import ad from "@/assets/ad.svg";

const Ad = () => {
	return (
		<div className="w-[250px] h-[490px] bg-dark-card-bg shadow-[0_8px_16px_0_rgba(0,0,0,0.05)] ">
			<div className="p-4 flex flex-col gap-4 ">
				<div className=" flex flex-col gap-2 relative border border-1 border-dark-brdr">
					<Image src={ad} alt="ad" className="w-full h-auto" />
					<div className="absolute top-0  right-0 bg-black w-[50px] h-[25px] text-white px-4 py-1 text-xs">
						Ad
					</div>
					<div className="p-1 flex flex-col gap-2">
						<h1 className="dark:text-white text-lg font-semibold">
							Advertisement title
						</h1>
						<span className="text-sm text-wrap text-dark-card-detail-title">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ad;
