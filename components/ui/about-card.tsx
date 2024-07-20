interface AboutCardProps {
    icon: JSX.Element;
    label: string;
}

export const AboutCard = ({
    icon,
    label
}: AboutCardProps) => {
    return (
        <div className="w-full flex gap-4 items-center text-muted-foreground font-bold">
            <div className="text-[#ED3A85] text-xl">
                {icon}
            </div>
            <div>
                {label}
            </div>

        </div>
    )
}