import { IoCall } from "react-icons/io5";
import Button from "@/components/ui/button"

export const GetQuoteAndContact = () => {
    return (
        <div className="w-full px-8 sm:w-auto flex items-center flex-col gap-y-3 sm:flex-row justify-evenly gap-x-10">
            <Button label="Get a Quote" classname="w-full rounded-none px-10" variant="default" />
            <div className="flex items-center min-w-fit justify-center gap-2">
                <IoCall className="text-blue-500" />
                +91 9324208762
            </div>
        </div>
    )
}