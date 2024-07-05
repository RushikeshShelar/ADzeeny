import { ServiceCard } from "@/components/ui/service-card"

export const ServiceCards = () => {
    return (
        <div className="flex items-center flex-col md:flex-row justify-evenly mt-4 w-full h-full ">
            <ServiceCard
                headImageSrc="/webdesign.png"
                title="Web Design"
                description="Crafting visually stunning and user-friendly websites that captivate your audience and enhance your online presence."
                bodyImageUrl="/webmain.png"
            />
            <ServiceCard
                headImageSrc="/digitalmarket.png"
                title="Digital Marketing"
                description="Maximize your reach and engagement with our expert digital marketing services, designed to deliver measurable results."
                bodyImageUrl="/digitalmain.png"
            />
            <ServiceCard
                headImageSrc="/code.png"
                title="Web Design"
                description="Crafting visually stunning and user-friendly websites that captivate your audience and enhance your online presence."
                bodyImageUrl="/codemain.png"
            />
            <ServiceCard
                headImageSrc="/graphicdesign.png"
                title="Graphic Design"
                description="Delivering unique and professional graphic designs that elevate your brand’s visual identity and attract your target audience."
                bodyImageUrl="/graphicmain.png"
                imageW={140}
                imageH={140}
            />
        </div>
    )
}