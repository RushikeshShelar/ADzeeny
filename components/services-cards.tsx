"use client";

import { motion } from "framer-motion"
import { ServiceCard } from "@/components/ui/service-card"
import { allServices } from "@/data/services"
import { RiseUp } from "./ui/rise-up";

export const ServiceCards = () => {


    return (
        <div className="flex items-stretch flex-col lg:flex-row mt-4 w-full h-full flex-1 ">
            {allServices.map((item) => (
                <RiseUp key={item.bodyImageUrl}>
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