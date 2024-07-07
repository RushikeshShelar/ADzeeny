"use client";

import { motion } from "framer-motion";

interface RiseUpProps {
    children: React.ReactNode;
    iniitalX?: number;
    initialY?: number; 
    hoverY?: number; // Optional prop for hover effect
    transitionDuration?: number; // Optional prop for transition duration
    [x: string]: any; // Allows passing any additional props
  }
  

export const RiseUp: React.FC<RiseUpProps>= ({
    children,
    hoverY = -10,
    transitionDuration = 0.5,
    iniitalX,
    initialY,
    ...props
}) => {
    return (
        <motion.div
            initial={{ y: initialY }}
            whileHover={{ y: hoverY }}
            transition={{ duration: transitionDuration }}
        >
            {children}
        </motion.div>
    )
}