import { Spotlight } from "@/components/ui/spotlight"

export const HomeSpotlights = () => {
    return (
        <>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-10 h-screen" fill="white" />
            {/* <Spotlight className="top-10 left-[30rem] h-[80vh] w-[50vw]" fill="purple" /> */}
            <Spotlight className="top-28 md:left-60 h-[80vh]" fill="#ED3A85" />
            <Spotlight className="top-10 md:left-56 md:-top-10 h-[80vh] w-[50vw] hidden md:block" fill="blue" />
        </>
    )
}