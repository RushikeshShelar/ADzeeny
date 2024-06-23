import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Mail, MapPinned, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {

    return (
        <footer className="w-full text-white">
            {/* <div className="h-14 bg-red-100 sticky top-0"></div> */}
            <div className="m-auto lg:w-full">
                <div className="flex flex-col md:flex-row md:px-40 md:justify-between ">

                    <div id="desc" className="text-center flex flex-col gap-4 py-6 md:max-w-[30%] md:text-left md:tracking-wider">
                        <div className="relative">
                            {/* <Image
                            src="/logo.png"
                            alt="Adezeeny Logo"
                            fill
                            /> */}
                            <h1 className="text-[40px]">Adzeeny</h1>
                        </div>
                        <div className="px-2 text-sm text-gray-300">
                            A passionate team of digital artisans helps clients navigate the digital Landscape
                        </div>
                        <div id="socials" className="flex gap-3 justify-center items-center md:justify-start w-1/3 m-auto md:m-0 md:w-full pt-2 py-4">
                            <div className="relative h-20 w-20 md:h-6 md:w-6">
                                <Image
                                    className="social-icon"
                                    src="/facebook.svg"
                                    alt="Facebook"
                                    fill
                                />
                            </div>
                            <div className="relative h-28 w-28 md:h-6 md:w-6">
                                <Image
                                    className="social-icon"
                                    src="/instagram.svg"
                                    alt="instagram."
                                    fill
                                />
                            </div>
                            <div className="relative h-28 w-28 md:h-6 md:w-6">
                                <Image
                                    className="social-icon"
                                    src="/youtube.svg"
                                    alt="youtube"
                                    fill
                                />
                            </div>
                            <div className="relative h-28 w-28 md:h-6 md:w-6">
                                <Image
                                    className="social-icon"
                                    src="/x.svg"
                                    alt="x"
                                    fill
                                />
                            </div>
                        </div>
                    </div>

                    <div id="info" className="flex flex-col px-5 gap-6 mb-12">
                        <div className="text-sm font-semibold text-center tracking-wider md:flex md:gap-2 ">
                            <span className="text-xs font-thin text-gray-600 pr-1 md:hidden">
                                -------------------
                            </span>
                            CONTACT INFO
                            <span className="text-xs font-thin text-gray-600 pl-1 md:hidden">
                                -------------------
                            </span>
                            <span className="border border-dashed w-1/2 h-0 my-auto" />

                        </div>
                        <div className="mb-6 flex flex-col gap-3 md:gap-6 " >
                            <div className="flex gap-4 md:gap-6">
                                <MapPinned /> <div>Mumbai, Maharashtra, India</div>
                            </div>
                            <div className="flex gap-4 md:gap-6">
                                <Phone /> <div>+91 9324208761</div>
                            </div>
                            <div className="flex gap-4 md:gap-6">
                                <Mail /> <div>info@adzeeny.com</div>
                            </div>
                        </div>
                    </div>

                    <div id="newsletter" className="px-5 flex flex-col gap-6 mb-10  md:text-base tracking-wider md:font-normal" >
                        <div className="text-sm font-semibold text-center tracking-wider md:flex md:gap-2">
                            <span className="text-xs font-thin text-gray-600 pr-1 md:hidden">
                                ---------------
                            </span>
                            GET DETAILED BROCHURE
                            <span className="text-xs font-thin text-gray-600 pl-1 md:hidden">
                                ---------------
                            </span>
                            <span className="border border-dashed w-1/3 h-0 my-auto" />
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <Input placeholder="Your Email Address..." className="placeholder:text-gray-400" />
                            <Button label=" REQUEST BROCHURE" />
                            <div className="text-sm text-gray-300 mt-1 md:mt-2">
                                Get details information about our services.
                            </div>
                        </div>
                    </div>

                </div>
                <div id="bottom" className="text-center mb-10 px-5">
                    <div className="md:hidden">
                        <span className="text-xs font-thin text-gray-600">
                            -----------------------------------------------------------
                        </span>
                    </div>
                    <span className="w-[80vw] mx-auto border hidden md:block border-dashed"></span>
                    <div className="flex flex-col w-2/3  m-auto text-xs gap-4 text-gray-300 py-5 md:flex-row md:justify-between md:w-[80vw] md:text-sm">
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex">
                                <ChevronRight size={20} /> <span>Terms of Use</span>
                            </div>
                            <div className="flex">
                                <ChevronRight size={20} /> <span>Privacy Policy</span>
                            </div>
                        </div>
                        <div>
                            &copy; 2024 Adzeeny. &nbsp; All Rights Reserved.
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;