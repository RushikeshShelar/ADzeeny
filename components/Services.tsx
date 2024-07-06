import { Heading } from "@/components/ui/heading";
import { SectionHero } from "@/components/ui/section-hero";
import { ServiceCards } from "@/components/services-cards";
import { GetQuoteAndContact } from "@/components/ui/get-quote";

const Services = () => {
    return (
        <div className="md:mx-20 text-center flex flex-col items-center gap-y-1">
            <Heading label="OUR SERVICES" className="text-[#ED3A85]" />
            <SectionHero heading="Innovative Digital Solutions" para="We believe technology and design can transform businesses and propel them into the future. We are your digital excellence partners, not just a digital agency."/>
            <ServiceCards />
            <GetQuoteAndContact />
        </div>
    );
}

export default Services;