import { ReactNode } from "react";
import Image from "next/image";

export interface FeatureCard {
    icon: ReactNode;
    title: string;
}

export interface FeaturesSectionProps {
    bgImage: string;          
    features: FeatureCard[];  
    className?: string;
}

const FeaturesSection = ({ bgImage, features, className}: FeaturesSectionProps) => {
    return (
        <section className={`relative w-full overflow-hidden ${className}`}>
            <div className="absolute inset-0 -z-10">
                <Image
                    src={bgImage}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container mx-auto">
                <div className="flex lg:items-start lg:flex-row flex-col gap-15 items-center justify-between">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#FFFFFF4D] rounded-3xl p-30 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:-translate-y-1 duration-300 min-h-189 w-full max-w-293 "
                        >
                            <div className="text-main-orange mb-3">
                                {feature.icon}
                            </div>
                            <h4 className="text-main-text font-semibold text-xl md:text-base leading-snug">
                                {feature.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;