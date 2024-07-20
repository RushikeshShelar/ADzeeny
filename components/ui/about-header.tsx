import { Heading } from "@/components/ui/heading"

export const AboutHeader = () => {
    return (
        <>
            <Heading label="WHY CHOOSE US" className="h-auto text-left w-auto min-w-fit text-[#ED3A85]" />
            <span className="border-red border-dashed w-full ml-3 my-auto h-0 hidden md:block  border-gray-700 border-[2px]" />
        </>
    )
}