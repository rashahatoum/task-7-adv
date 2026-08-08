import Image from "next/image";
import { Calendar, Users } from "lucide-react";

export interface ActivityCardProps {
    imageSrc: string;
    title: string;
    description: string;
    price?: number | string;
    schedule?: string;
    capacity?: string;
    imageHeightClass?: string;
    spacingClass?: string;
    gapClass?: string;
}

export default function ActivityCard({
    imageSrc,
    title,
    description,
    price,
    schedule,
    capacity,
    imageHeightClass = "h-[300px]",
    gapClass,
}: ActivityCardProps) {
    return (
        <div className={`flex flex-col w-full h-full shrink-0 ${gapClass}`}>
            <div className={`relative w-full rounded-2xl overflow-hidden ${imageHeightClass}`}>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="flex flex-col gap-12">
                <h3 className="text-2xl font-bold text-main-text">{title}</h3>
                {price && (
                    <div className="flex flex-col gap-10">
                        <p className="text-lg text-main-text font-semibold">
                            from <span className="text-main-orange font-extrabold text-2xl">{price} €</span>
                        </p>

                        <div className="flex items-center justify-between text-base text-main-orange font-semibold">
                            {schedule && (
                                <div className="flex items-center gap-9">
                                    <Calendar className="w-18 h-18" />
                                    <span className="uppercase">{schedule}</span>
                                </div>
                            )}
                            {capacity && (
                                <div className="flex items-center gap-9">
                                    <Users className="w-18 h-18" />
                                    <span className="uppercase">{capacity}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                <p className="text-base text-main-text line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
}