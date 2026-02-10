"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    distance?: number;
    className?: string;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    delay = 0,
    direction = "up",
    duration = 0.8,
    distance = 30,
    className = "",
    once = true,
}: ScrollRevealProps) {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {},
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{ once }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom luxury ease
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
