import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Button from "./button";

interface ServiceCardProps {
    headImageSrc: string;
    title: string;
    description: string;
    bodyImageUrl: string;
}

export const ServiceCard = ({
    headImageSrc,
    title,
    description,
    bodyImageUrl,

}: ServiceCardProps) => {
    return (
        <Card className="flex flex-col items-center space-y-4 m-3 justify-center">
            <CardHeader className="flex flex-col items-center space-y-4">
                <Image
                    src={headImageSrc}
                    height={60}
                    width={60}
                    alt="ServicesImage"
                    className=""
                />
                <CardTitle className="font-bold tracking-wide text-2xl w-full">
                    {title}
                </CardTitle>
                <CardDescription className="font-semibold">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent className="relative h-32 w-40">
                <Image
                    src={bodyImageUrl}
                    fill
                    alt="ServicesImage"
                />
            </CardContent>
            <CardFooter className="w-full">
                <Button variant="outline" label="Learn More" classname="w-full"/>
            </CardFooter>
        </Card>
    )
}