import Image from "next/image"

interface StepCardProps{
    step: number;
    title: string;
    desc: string;
    img:string;
}

export const StepCard : React.FC<StepCardProps>= ({
    title,
    desc,
    step,
    img
}) => {
    return (
        <div className="w-full flex flex-col space-y-2 min-w-60 md:max-w-72 bg-black shadow-2xl px-8 border-2 py-5 h-full">
            <div className="flex w-full items-center justify-between">
                <div className="relative h-16 w-16">
                    <Image 
                        src={img}
                        alt={img}
                        fill
                    />
                </div>
                <div className="text-xl font-extrabold">
                    {step}
                </div>
            </div>

            <div className="text-xl font-semibold mt-4">
                {title}
            </div>

            <div className="text-sm tracking-wide mt-10">
                {desc}
            </div>

        </div>
    )
}