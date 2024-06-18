import Image from "next/image";

import { TextGenerateEffect } from "@/components/ui/textGenerateEffect";
import Button from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";

const Hero = () => {
    return (
        <>
            {/* Adding Spotlight Here */}
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-10 h-screen" fill="white" />
            {/* <Spotlight className="top-10 left-[30rem] h-[80vh] w-[50vw]" fill="purple" /> */}
            <Spotlight className="top-28 md:left-60 h-[80vh]" fill="#ED3A85" />
            <Spotlight className="top-10 md:left-56 md:-top-10 h-[80vh] w-[50vw] hidden md:block" fill="blue" />


            



            {/* GRID BACKGROUND */}
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 z-[-1]">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>


            <main className="w-full h-screen flex flex-col mt-20 justify-center md:justify-start items-center px-10 md:px-20            ">

                <div className="h-3/4 flex flex-col justify-center md:items-end text-center md:text-start gap-6 md:flex-row md:gap-x-20">
                    {/*TODO: LOGO HERE  */}
                    {/* <Image
                    src=""
                    alt="ADZEENY"
                /> */}



                    <div className="flex flex-col justify-center gap-5 md:gap-10 md:max-w-[45vw] md:px-20">
                        <TextGenerateEffect
                            words="Wish for More Customers? Your Advertisiment Genie is right here."
                            className="text-3xl md:text-4xl tracking-widest"
                        />
                        <div className="tracking:wider md:text-lg font-normal">
                            {/* TODO: Figure out which is Better */}
                            Our comprehensive digital solutions will completely transform your company. Grow the future of your business.
                            {/* <TextGenerateEffect
                                words=" Our comprehensive digital solutions will completely transform your company. Grow the future of your business."
                                className="font-medium"
                            /> */}
                        </div>
                        <div className="flex flex-col gap-3 md:flex-row">
                            <Button label="Get a Free Quote" />
                            <Button label="Our Services" variant="default" />
                        </div>
                    </div>


                    <div className="mt-10 md:mt-0">
                        <Image
                            src={'/main.jpg'}
                            alt="Landing page image"
                            height={800}
                            width={800}
                        />
                    </div>
                </div>


            </main>
        </>
    );
}

export default Hero;