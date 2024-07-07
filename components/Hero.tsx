import Image from "next/image";

import { TextGenerateEffect } from "@/components/ui/textGenerateEffect";

import Button from "@/components/ui/button";
import { HomeSpotlights } from "@/components/ui/home-spotlights";
import { GridBackground } from "@/components/ui/grid-bg";
import { RiseUp } from "@/components/ui/rise-up";

const Hero = () => {

    return (
        <>
            {/* Adding Spotlight Here */}
            <HomeSpotlights />

            {/* GRID BACKGROUND */}
            <GridBackground />

            <main className="gap-0">
                <div className="w-full h-screen flex flex-col mt-10 md:pt-60 justify-center md:justify-start items-center px-10 md:px-20   ">
                    <div className="h-3/4 flex flex-col justify-center items-center text-center md:text-start gap-6 md:flex-row md:gap-x-20">
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
                                <RiseUp hoverY={-2}>
                                    <Button label="Get a Free Quote" />
                                </RiseUp>
                                <RiseUp hoverY={-2}>
                                    <Button label="Our Services" variant="default" />
                                </RiseUp>
                            </div>
                        </div>


                        <div className="mt-10 md:mt-0 relative md:h-[30rem] md:w-[35rem] w-80 h-40 md:block hidden">
                            <Image
                                src={'/main.jpg'}
                                alt="Landing page image"
                                fill
                            />
                        </div>

                        <div className="mt-10 md:mt-0 md:hidden">
                            <Image
                                src={'/main.jpg'}
                                alt="Landing page image"
                                height={800}
                                width={800}
                            />
                        </div>

                    </div>
                </div>

            </main>
        </>
    );
}

export default Hero;