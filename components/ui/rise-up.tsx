"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface RiseUpProps {
    children: React.ReactNode;
    classname?: string;
    iniitalX?: number;
    initialY?: number;
    hoverY?: number; // Optional prop for hover effect
    transitionDuration?: number; // Optional prop for transition duration
    [x: string]: any; // Allows passing any additional props
}


export const RiseUp: React.FC<RiseUpProps> = ({
    children,
    hoverY = -10,
    transitionDuration = 0.5,
    iniitalX,
    initialY,
    classname,
    ...props
}) => {
    return (
        <motion.div
            initial={{ y: initialY }}
            whileHover={{ y: hoverY }}
            transition={{ duration: transitionDuration }}
            className={cn("", classname)}
        >
            {children}
        </motion.div>
    )
}