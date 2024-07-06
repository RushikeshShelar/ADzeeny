import { cn } from "@/lib/utils";

interface HeadingProps {
    label: string;
    className?: string;
}

export const Heading = ({
    label,
    className,
}: HeadingProps) => {
    return (
        <div className={cn(className, "h-full w-full text-center font-bold text-sm md:text-lg tracking-wide")} >
            {label}
        </div >
    )
}