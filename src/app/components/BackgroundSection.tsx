import Image from 'next/image';
import { ReactNode } from 'react';

interface BackgroundSectionProps {
    bgImg:string;
    title?:string;
    children: ReactNode;
    className?: string;
    image:string;
    imgAlt: string;      
    imgWidth?: number;      
    imgHeight?: number;     
    imgPosition?:string;
    OfferStyle?:string
}

export default function BackgroundSection({bgImg,title,image,children,className,imgPosition,imgAlt,imgWidth,imgHeight,OfferStyle}:BackgroundSectionProps) {
    return (
        <section className={`relative w-full flex flex-col-reverse lg:flex-row justify-between px-[13vw] gap-30 lg:gap-8 ${className}`}>
            <div className={`absolute inset-0 -z-10 w-full h-full ${OfferStyle}`}>
                <Image
                    src={bgImg}
                    alt="Booking Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>
            <div className="w-full lg:max-w-734px flex flex-col gap-36">
                <h2 className="text-2xl sm:text-3xl font-bold text-main-text text-center">
                    {title}
                </h2>
                {children}
            </div>

            <Image
                src={image}
                alt={imgAlt}
                width={imgWidth}
                height={imgHeight}
                className={`object-contain ${imgPosition}`}
            />

        </section>
    );
}