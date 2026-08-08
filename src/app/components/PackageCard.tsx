import Image from 'next/image';
import { ReactNode } from 'react';

interface Feature {
    icon: ReactNode;
    text: string;
}

interface PackageCardProps {
    image: string;
    title: string;
    price: string | number;
    features: Feature[];
}

export default function PackageCard({ image, title, price, features }: PackageCardProps) {
    return (
        <div className="w-full max-w-320px rounded-3xl border border-gray-100 flex flex-col transition-transform duration-300 hover:-translate-y-2">
            <div className="relative w-full max-w-340 mb-25">
                <Image
                    src={image}
                    alt={title}
                    width={340}
                    height={340}
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col grow px-6 lg:px-25">
                <h3 className="text-base font-bold text-gray-800 uppercase tracking-wide mb-16">
                    {title}
                </h3>
                <div className="flex items-baseline gap-7 mb-16">
                    <span className="text-gray-400 text-lg font-medium self-start">€</span>
                    <span className="text-main-orange text-4xl lg:text-5xl font-extrabold">{price}</span>
                    <span className="text-gray-400 text-lg font-medium">/day</span>
                </div>
                <ul className="flex flex-col gap-20 mb-20 grow">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-16 text-lg font-medium">
                            <span className='text-main-orange'>{feature.icon}</span>
                            {feature.text}
                        </li>
                    ))}
                </ul>
                <button className="mt-auto w-full py-12 rounded-full border border-main-orange text-main-orange font-semibold hover:bg-main-orange hover:text-white transition-all duration-300">
                    Book Now
                </button>
                
            </div>
        </div>
    );
}