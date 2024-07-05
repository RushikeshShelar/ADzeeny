import { ServiceHeading } from "@/components/ui/service-heading";
import { ServiceHero } from "@/components/ui/service-hero";
import { ServiceCards } from "@/components/services-cards";
import { GetQuoteAndContact } from "./ui/get-quote";

export const Services = () => {
    return (
        <div className="md:mx-20 text-center flex flex-col items-center gap-y-1">
            <ServiceHeading />
            <ServiceHero />
            <ServiceCards />
            <GetQuoteAndContact />
        </div>
    );
}