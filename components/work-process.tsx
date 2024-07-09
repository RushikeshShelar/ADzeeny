
import { FaLongArrowAltDown, FaLongArrowAltRight } from "react-icons/fa";
import { Heading } from "./ui/heading";
import { SectionHero } from "./ui/section-hero";
import { StepCard } from "./ui/step-card";
import { processes } from "@/data/process";
import { cn } from "@/lib/utils";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";

const WorkProcess = () => {
    return (
        <section className="lg:px-20 w-full z-10 py-10">
            <div className="text-center flex flex-col items-center space-y-4">
                <Heading label="WORK PROCESS" className="text-[#ED3A85] text-lg" />
                <SectionHero heading="Seamless process, stellar solutions" para="Find out how we transform your ideas into digital solutions by learning how our efficient work process can turn them into digital solutions."
                    headClassname="text-xl px-2"
                />
                <div className="flex w-full flex-wrap justify-around items-center text-left gap-4 h-full">
                    {
                        processes.map((item) => (
                            <div className="w-full px-5 md:px-0 gap-6 flex self-stretch items-center flex-col md:flex-row md:w-auto justify-between"
                                key={item.title}

                            >
                                <StepCard
                                    title={item.title}
                                    desc={item.desc}
                                    step={item.step}
                                    img={item.img}
                                />
                               <FaLongArrowAltRight className={cn("hidden md:block h-6 w-8 text-[#34D6E2]", item.step === 4 ? "md:hidden": "")} />
                                <FaLongArrowAltDown className={cn("block md:hidden h-10 w-10  text-[#34D6E2]", item.step === 4 ? "hidden": "")}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section >
    );
}

export default WorkProcess;