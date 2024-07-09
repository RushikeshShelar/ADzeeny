import { cn } from "@/lib/utils"

export const SectionHero = ({
    heading,
    para,
    headClassname,
    paraClassname,

}: {
    heading: string,
    para: string,
    headClassname? :string,
    paraClassname? :string,
}) => {
    return (
        <>
            <h2 className={cn("text-2xl md:text-4xl mt-6 font-extrabold tracking-wide", headClassname)}>
                {heading}
            </h2>
            {para && <p className={cn("mt-3 px-6 md:w-[60%] md:m-auto md:mt-4 w-full text-center", paraClassname)}>
                {para}
            </p>}
        </>
    )
}