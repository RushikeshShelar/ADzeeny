import { ServiceCard } from "@/components/ui/service-card"
import { allServices } from "@/data/services"

export const ServiceCards = () => {
    return (
        <div className="flex items-center flex-col md:flex-row mt-4 w-full h-full flex-1 ">
            {allServices.map((item) => (
                <ServiceCard key={item.bodyImageUrl}
                    headImageSrc={item.headImageSrc}
                    title={item.title}
                    description={item.description}
                    bodyImageUrl={item.bodyImageUrl}
                />
            ))}
        </div>
    )
}