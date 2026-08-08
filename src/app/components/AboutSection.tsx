import Image from "next/image";

export interface StatItem {
    number: string;
    label: string;
}

interface AboutSectionProps {
    subTitle?: string;
    title: string;
    description: string;
    imageSrc: string;
    stats: StatItem[];
    imgDimensions?: string;
}

export default function AboutSection({
    subTitle,
    title,
    description,
    imageSrc,
    stats,
    imgDimensions,
}: AboutSectionProps) {
    return (
        <section className="w-full container mx-auto">
            <div
                className="flex flex-col lg:flex-row items-center justify-between gap-70 md:gap-16"
            >
                    <div className={`w-full lg:w-[50%] flex justify-center items-center ${imgDimensions}`}>
                        <Image
                            src={imageSrc}
                            alt={title}
                            width={500}
                            height={650}
                            className="w-full h-auto object-contain rounded-3xl"
                            priority
                        />
                    </div>
                <div className="w-full lg:w-[45%] flex flex-col justify-center gap-6 lg:text-start text-center">

                    <p className="text-base md:text-lg font-semibold tracking-wider text-main-text uppercase">
                        {subTitle}
                    </p>

                    <h2 className="text-2xl md:text-4xl font-extrabold text-main-text leading-tight pb-32">
                        {title}
                    </h2>

                    <p className="text-sm md:text-base text-main-text leading-relaxed pb-32">
                        {description}
                    </p>
                    <div className="grid grid-cols-4 gap-20 lg:gap-50 lg:mr-[10vw] m-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col gap-6">
                                <span className="text-2xl md:text-[32px] font-bold text-main-orange">
                                    {stat.number}
                                </span>
                                <span className="text-xs md:text-base text-main-text font-medium leading-snug">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}