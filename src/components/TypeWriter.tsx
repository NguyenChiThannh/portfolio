"use client";

import React, { useState, useEffect } from "react";

interface TypeWriterProps {
    words: string[];
    delay?: number;
    infinite?: boolean;
    className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
    words = [],
    delay = 100,
    infinite = true,
    className = "",
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(delay);

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentWord = words[currentWordIndex];

            // If we're deleting, remove the last character
            if (isDeleting) {
                setCurrentText(currentWord.substring(0, currentText.length - 1));
                setTypingSpeed(delay / 2); // Delete faster than type
            } else {
                // If we're typing, add the next character
                setCurrentText(currentWord.substring(0, currentText.length + 1));
                setTypingSpeed(delay);
            }

            // If we've completed typing the word
            if (!isDeleting && currentText === currentWord) {
                // Pause at the end of typing
                setTypingSpeed(delay * 3);
                setIsDeleting(true);
            }
            // If we've deleted the word
            else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prev) =>
                    infinite ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
                );
                setTypingSpeed(delay / 2);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, delay, infinite, typingSpeed]);

    return (
        <span className={className}>
            {currentText}
            <span className="animate-blink">|</span>
        </span>
    );
};

export default TypeWriter; 