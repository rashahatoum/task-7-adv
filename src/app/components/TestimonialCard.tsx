import Image from "next/image";
import QuoteIcon from "./icons/QuoteIcon";

interface TestimonialCardProps {
    customerImageSrc: string;
    customerName: string;
    testimonialText: string;
}

export default function TestimonialCard({
    customerImageSrc,
    customerName,
    testimonialText,
}: TestimonialCardProps) {
    return (
        <div className="flex flex-col p-15 md:p-30 border border-main-text rounded-3xl w-full h-full shrink-0">
            <div className="flex flex-col items-center justify-center gap-15 w-fit mx-auto">
                <div className="relative w-80 h-80 rounded-full overflow-hidden">
                    <Image
                        src={customerImageSrc}
                        alt={customerName}
                        fill
                        className="object-cover"
                        sizes="80px"
                    />
                </div>
                <p className="text-base md:text-lg font-bold text-main-text">
                    {customerName}
                </p>
            </div>
            <div className="flex flex-col items-start gap-10 h-full">
                <QuoteIcon className="w-40 h-28 text-[#fa8a0236] self-start" />
                <p className="text-base md:text-lg text-main-text leading-relaxed font-normal pl-20">
                    {testimonialText}
                </p>
                <QuoteIcon className="w-40 h-28 text-[#fa8a0236] self-end" />
            </div>
        </div>
    );
}