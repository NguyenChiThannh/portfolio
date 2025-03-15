"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FramerMotionProps {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    x?: number;
    duration?: number;
    scale?: number;
    className?: string;
}

function FramerWrapper({
    children,
    delay = 0.25,
    y = 15,
    x = 0,
    duration = 0.2,
    scale = 0,
    className
}: FramerMotionProps) {
    return (
        <AnimatePresence>
            <motion.div
                initial={scale === 0 ? { opacity: 0, y: y, x: x } : { opacity: 0, y: y, x: x, scale: scale }}
                animate={scale === 0 ? { opacity: 1, y: 0, x: 0 } : { opacity: 1, y: 0, x: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: delay, duration: duration }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

export default FramerWrapper; 