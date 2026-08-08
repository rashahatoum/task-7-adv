import Slider from "./Slider";
import TestimonialCard from "./TestimonialCard";
import { getDictionary } from "@/i18n/dictionaries";

export default async function CustomersSaysSection() {
    const dict = await getDictionary();

    return (
        <section className="container mx-auto">
            <Slider
                title={dict.home.testimonials.title}
                className="gap-20"
                prevLabel={dict.common.previous}
                nextLabel={dict.common.next}
            >
                {dict.home.testimonials.items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full xl:w-[calc(50%-20px)] shrink-0 snap-start"
                    >
                        <TestimonialCard
                            customerImageSrc={item.image}
                            customerName={item.name}
                            testimonialText={item.text}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
}
