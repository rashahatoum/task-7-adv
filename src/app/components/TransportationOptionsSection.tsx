import ActivityCard from "./ActivityCard";
import { getDictionary } from "@/i18n/dictionaries";

export default async function TransportationOptionsSection() {
    const dict = await getDictionary();

    return (
        <section className="flex xl:flex-row flex-col items-start justify-start container mx-auto gap-33">
            {dict.home.transportation.map((item, index) => (
                <div
                    key={index}
                    className="w-full xl:w-[calc(25%-33px)] shrink-0 snap-start min-h-476"
                >
                    <ActivityCard
                        imageSrc={item.image}
                        title={item.title}
                        description={item.description}
                        imageHeightClass="h-302"
                        gapClass="gap-20"
                    />
                </div>
            ))}
        </section>
    );
}