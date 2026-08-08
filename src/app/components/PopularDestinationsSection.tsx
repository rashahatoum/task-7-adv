import ActivityCard from "./ActivityCard";
import Slider from "./Slider";
import { getDictionary } from "@/i18n/dictionaries";

export default async function PopularDestinationsSection() {
    const dict = await getDictionary();

    return (
        <section className="container mx-auto">
            <Slider
                title={dict.home.destinations.title}
                className="gap-33"
                prevLabel={dict.common.previous}
                nextLabel={dict.common.next}
            >
                {dict.home.destinations.items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full xl:w-[calc(25%-33px)] shrink-0 snap-start"
                    >
                        <ActivityCard
                            imageSrc={item.image}
                            title={item.title}
                            price={item.price}
                            schedule={item.schedule}
                            capacity={item.capacity}
                            description={item.description}
                            fromLabel={dict.common.from}
                            currency={dict.common.currency}
                            imageHeightClass="h-404"
                            gapClass="gap-16"
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
}
