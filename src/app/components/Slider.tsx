"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";

interface SliderProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    prevLabel: string;
    nextLabel: string;
}

export default function Slider({
    title,
    children,
    className,
    prevLabel,
    nextLabel,
}: SliderProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: "prev" | "next") => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const firstCard = container.children[0] as HTMLElement | undefined;
        const secondCard = container.children[1] as HTMLElement | undefined;
        if (!firstCard) return;

        const isRtl = getComputedStyle(container).direction === "rtl";
        const sign = isRtl ? -1 : 1;

        const step = secondCard
            ? Math.abs(secondCard.offsetLeft - firstCard.offsetLeft)
            : firstCard.offsetWidth;

        const max = container.scrollWidth - container.clientWidth;
        const scrollLeft = container.scrollLeft;
        const progress = isRtl ? Math.abs(scrollLeft) : scrollLeft;
        const tolerance = 5;

        if (direction === "next") {
            if (progress >= max - tolerance) {
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollBy({ left: sign * step, behavior: "smooth" });
            }
        } else {
            if (progress <= tolerance) {
                container.scrollTo({ left: sign * max, behavior: "smooth" });
            } else {
                container.scrollBy({ left: -sign * step, behavior: "smooth" });
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
                        onClick={() => handleScroll("prev")}
                        aria-label={prevLabel}
                        className="flex items-center justify-center
                        w-50 h-50 rounded-full bg-[#EFEFEF] hover:bg-main-orange hover:text-white transition-colors duration-200"
                    >
                        <ChevronLeft className="rtl:rotate-180" />
                    </button>

                    <button
                        onClick={() => handleScroll("next")}
                        aria-label={nextLabel}
                        className="flex items-center justify-center
                        w-50 h-50 rounded-full bg-[#EFEFEF] hover:bg-main-orange hover:text-white transition-colors duration-200"
                    >
                        <ChevronRight className="rtl:rotate-180" />
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
