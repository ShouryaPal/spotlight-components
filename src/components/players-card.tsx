import React from 'react'
import Image from "next/image";

type Props = {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    image : any,
    name : string,
    totalEvents : number,
    sport: string
}

const PlayersCard = ({image , name, totalEvents , sport}: Props) => {
  return (
    <div className="w-fit h-fit bg-dark-card-bg shadow-[0_8px_16px_0_rgba(0,0,0,0.05)]">
							<div className="p-4 flex flex-col gap-2">
								<Image
									src={image}
									alt={image}
									className="object-cover"
								/>
								<h1 className="dark:text-white text-lg truncate">{name}</h1>
								<div className="w-auto h-auto bg-dark-primary-bg">
									<div className="p-2 flex items-center justify-between">
										<div className="flex flex-col items-start gap-1">
											<h1 className="text-dark-card-detail-title text-base">
												Total Events
											</h1>
											<h1 className="dark:text-white text-base">{totalEvents} Events</h1>
										</div>
										<div className="flex flex-col items-start  gap-1">
											<h1 className="text-dark-card-detail-title text-base">
												Sport
											</h1>
											<h1 className="dark:text-white text-base">{sport}</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
  )
}

export default PlayersCard