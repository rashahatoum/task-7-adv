import Slider from "./Slider"
import TestimonialCard from "./TestimonialCard"

const TestimonialCardsData = [
    {
        customerImageSrc: "/assets/imgs/Lyod-Gomez.png",
        customerName: "Lyod Gomez",
        testimonialText: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
    },
    {
        customerImageSrc: "/assets/imgs/Lyod-Gomez.png",
        customerName: "Lyod Gomez",
        testimonialText: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
    },
    {
        customerImageSrc: "/assets/imgs/Lyod-Gomez.png",
        customerName: "Lyod Gomez",
        testimonialText: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
    },
    {
        customerImageSrc: "/assets/imgs/Lyod-Gomez.png",
        customerName: "Lyod Gomez",
        testimonialText: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
    },
]
const CustomersSaysSection = () => {
    return (
        <section className="container mx-auto">
            <Slider title="Happy Customers Says" className="gap-20">
                {TestimonialCardsData.map((item, index) => (
                    <div
                        key={index}
                        className="w-full xl:w-[calc(50%-20px)] shrink-0 snap-start"
                    >
                        <TestimonialCard
                            customerImageSrc={item.customerImageSrc}
                            customerName={item.customerName}
                            testimonialText={item.testimonialText}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default CustomersSaysSection