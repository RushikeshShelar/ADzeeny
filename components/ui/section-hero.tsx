export const SectionHero = ({
    heading,
    para
}: {
    heading: string,
    para: string
}) => {
    return (
        <>
            <h2 className="text-2xl md:text-4xl mt-6 font-extrabold tracking-wide">
                {heading}
            </h2>
            {para && <p className="mt-3 px-6 md:w-[60%] md:m-auto md:mt-4 w-full text-center">
                {para}
            </p>}
        </>
    )
}