import { Heading } from "@/components/ui/heading"
import { CreativePortfolio } from "@/components/creative-portfolio"
import { SectionHero } from "@/components/ui/section-hero"
import { AnotherPortfolio } from "./another-potfolio"

const Portfolio = () => {
    return (
        <section id="portfolio" className="min-h-screen flex flex-col items-center pt-10">
            <Heading label="PORTFOLIO" className="text-[#ED3A85]" />
            <SectionHero heading="Creative Portfolio" para="A selection of Some Recent Projects" />
            <CreativePortfolio />
            {/* <AnotherPortfolio /> */}
        </section>
    )
}

export default Portfolio;