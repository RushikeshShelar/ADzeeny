import { IoCall } from "react-icons/io5";
import Button from "@/components/ui/button"
import { RiseUp } from "./rise-up";

export const GetQuoteAndContact = () => {
    return (
        <div className="w-full px-8 sm:w-auto flex items-center flex-col gap-y-3 sm:flex-row justify-evenly gap-x-10">
            <RiseUp hoverY={-2}>
                <Button label="Get a Quote" classname="w-full rounded-none px-10" variant="default" />
            </RiseUp>
            <RiseUp hoverY={-2}>
                <div className="flex items-center min-w-fit justify-center gap-2">
                    <IoCall className="text-blue-500" />
                    +91 9324208762
                </div>
            </RiseUp>
        </div>
    )
}