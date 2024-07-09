"use client";

import { ServiceCard } from "@/components/ui/service-card"
import { allServices } from "@/data/services"
import { RiseUp } from "@/components/ui/rise-up";

export const ServiceCards = () => {


    return (
        <div className="flex items-stretch justify-center flex-col lg:flex-row mt-4 w-full h-full ">
            {allServices.map((item) => (
                    <RiseUp key={item.bodyImageUrl} classname="flex self-stretch">
                        <ServiceCard
                            headImageSrc={item.headImageSrc}
                            title={item.title}
                            description={item.description}
                            bodyImageUrl={item.bodyImageUrl}
                        />
                    </RiseUp>
            ))}
        </div>
    )
}