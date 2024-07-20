import { AboutHeader } from "@/components/ui/about-header";
import { AboutCard } from "./ui/about-card";

import { IoDiamondOutline } from "react-icons/io5";
import { FaRegBookmark, FaRegCompass } from "react-icons/fa";
import Button from "./ui/button";
import Image from "next/image";
import { RiseUp } from "./ui/rise-up";

const aboutItems = [
    {
        label: "Digital solutions under one roof.",
        icon: <FaRegBookmark />
    },
    {
        label: "Competitive pricing for exceptional value.",
        icon: <IoDiamondOutline />
    },
    {
        label: "Strategies tailored to your business needs.",
        icon: <FaRegCompass />
    },

];


const About = () => {
    return (
        <section id="about" className="w-full pt-10 lg:px-24">
            <div className="w-full h-full flex justify-between flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 space-y-4 px-6 lg:px-0">
                    <div className="flex justify-evenly w-full h-6">
                        <AboutHeader />
                    </div>

                    <div className="w-full mt-4 space-y-6">
                        <h2 className="lg:text-5xl text-2xl font-extrabold text-center lg:text-left lg:font-semibold tracking-wider">Crafting experiences, delivering success.</h2>
                        <p className="font-thin text-lg tracking-wide text-justify text-gray-300">Our commitment to quality and excellence is unparalleled. From the first brainstorming session to the final product delivery, we ensure that every step of the process is executed to perfection. You are not just getting a service; you are getting a partner who is committed to your growth and success.</p>
                    </div>

                    <div className="w-full flex gap-x-20 items-center flex-col lg:flex-row">
                        <div className=" text-center lg:text-left mb-4 lg:mb-0">
                            <div className="neon-number-adzeeny text-8xl lg:text-6xl mb-3 mt-0 ">
                                15+
                            </div>
                            <p className="text-xl font-bold lg:text-sm">Satiesfied Clients and Businesses</p>
                        </div>

                        <div className="space-y-4">
                            {aboutItems.map(({ icon, label }) => (
                                <AboutCard
                                    key={label}
                                    icon={icon}
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>

                    <RiseUp transitionDuration={1} hoverY={-5}>

                        <Button label="More about us" classname="w-full" />
                    </RiseUp>
                </div>
                <div className="w-full lg:w-1/2 space-y-4 lg:px-10">

                    <div className="relative w-[95%] h-full shadow-temp">
                        <Image
                            src={"/main.jpg"}
                            alt="Team Image"
                            fill
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;

// box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;