"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    x?: number;
    duration?: number;
    scale?: number;
    className?: string;
    threshold?: number;
    once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    delay = 0.2,
    y = 30,
    x = 0,
    duration = 0.5,
    scale = 0,
    className = "",
    threshold = 0.1,
    once = true,
}) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    controls.start("visible");
                    if (once) {
                        observer.unobserve(entry.target);
                    }
                } else if (!once) {
                    setIsVisible(false);
                    controls.start("hidden");
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -100px 0px", // Trigger a bit before the element is in view
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [controls, once, threshold]);

    const variants = {
        hidden: scale === 0
            ? { opacity: 0, y, x }
            : { opacity: 0, y, x, scale },
        visible: scale === 0
            ? {
                opacity: 1,
                y: 0,
                x: 0,
                transition: {
                    duration,
                    delay,
                    ease: "easeOut"
                }
            }
            : {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                transition: {
                    duration,
                    delay,
                    ease: "easeOut"
                }
            },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal; 