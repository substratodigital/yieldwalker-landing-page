"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button when page is scrolled past the first section (e.g. 100vh)
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[100] cursor-pointer drop-shadow-xl overflow-hidden rounded-full"
                >
                    <img
                        src="/assets/scroll-up-dark.svg"
                        alt="Scroll to Top"
                        className="w-12 h-12 md:w-14 md:h-14 object-contain brightness-110"
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
