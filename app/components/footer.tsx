import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Mail, MapPinned, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {

    return (
        <footer className="w-full text-white">
            {/* <div className="h-14 bg-red-100 sticky top-0"></div> */}
            <div className="m-auto lg:w-full">
                <div id="desc" className="text-center lg:text-justify flex flex-col gap-4 py-6">
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
                    <div id="socials" className="flex gap-3 justify-center w-1/3 m-auto lg:w-full pt-8 py-10">
                        <Image
                            className="social-icon"
                            src="/facebook.svg"
                            alt="Facebook"
                            height={25}
                            width={25}
                        />
                        <Image
                            className="social-icon"
                            src="/instagram.svg"
                            alt="instagram."
                            height={25}
                            width={25}
                        />
                        <Image
                            className="social-icon"
                            src="/youtube.svg"
                            alt="youtube"
                            height={25}
                            width={25}
                        />
                        <Image
                            className="social-icon"
                            src="/x.svg"
                            alt="x"
                            height={25}
                            width={25}
                        />

                    </div>
                </div>

                <div id="info" className="flex flex-col w-full px-5 gap-6 mb-12">
                    <div className="text-sm font-semibold text-center">
                        <span className="text-xs font-thin text-gray-600 pr-1">
                            -------------------
                        </span>
                        CONTACT INFO
                        <span className="text-xs font-thin text-gray-600 pl-1">
                            -------------------
                        </span>
                    </div>
                    <div className="mb-6 flex flex-col gap-3">
                        <div className="flex gap-4">
                            <MapPinned /> <div>Mumbai, Maharashtra, India</div>
                        </div>
                        <div className="flex gap-4">
                            <Phone /> <div>+91 9324208761</div>
                        </div>
                        <div className="flex gap-4">
                            <Mail /> <div>info@adzeeny.com</div>
                        </div>
                    </div>
                </div>

                <div id="newsletter" className="px-5 flex flex-col gap-6 mb-10" >
                <div className="text-sm font-semibold text-center">
                        <span className="text-xs font-thin text-gray-600 pr-1">
                            ---------------
                        </span>
                        GET DETAILED BROCHURE
                        <span className="text-xs font-thin text-gray-600 pl-1">
                            ---------------
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input placeholder="Your Email Address..." className="placeholder:text-gray-400" />
                        <Button variant="outline" className="w-full rounded-none outline outline-cyan-300 outline-[0.1px] bg-transparent">REQUEST BROCHURE</Button>
                        <div className="text-sm text-gray-300 mt-1">
                            Get details information about our services.
                        </div>
                    </div>
                </div>

                <div id="bottom" className="text-center mb-10 px-5">
                    <div>
                        <span className="text-xs font-thin text-gray-600">
                            -----------------------------------------------------------
                        </span>
                    </div>
                    <div className="flex flex-col w-2/3  m-auto text-xs gap-4 text-gray-300 py-5">
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