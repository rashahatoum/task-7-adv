"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";

interface SliderProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function Slider({ title, children, className }: SliderProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

const handleScroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const firstCard = container.children[0] as HTMLElement;
        const secondCard = container.children[1] as HTMLElement;

        if (!firstCard) return;

        const scrollAmount = secondCard
            ? secondCard.offsetLeft - firstCard.offsetLeft
            : firstCard.offsetWidth;

        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        const tolerance = 5; 

        if (direction === "right") {
            if (currentScroll >= maxScroll - tolerance) {
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        } else {
            if (currentScroll <= tolerance) {
                container.scrollTo({ left: maxScroll, behavior: "smooth" });
            } else {
                container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <section className="w-full flex flex-col gap-60">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                <h2 className="text-2xl md:text-4xl font-bold text-main-text text-center lg:text-start lg:pb-0 pb-30">
                    {title}
                </h2>

                <div className="flex items-center justify-center gap-10">
                    <button
                        onClick={() => handleScroll("left")}
                        aria-label="Previous"
                        className=" flex items-center justify-center
                        w-50 h-50 rounded-full bg-[#EFEFEF] hover:bg-main-orange hover:text-white transition-colors duration-200"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={() => handleScroll("right")}
                        aria-label="Next"
                        className="flex items-center justify-center
                        w-50 h-50 rounded-full bg-[#EFEFEF] hover:bg-main-orange hover:text-white transition-colors duration-200"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
            <div
                ref={scrollContainerRef}
                className={`flex items-start justify-start overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-none] [&::-webkit-scrollbar]:hidden ${className || ""}`}
            >
                {children}
            </div>
        </section>
    );
}