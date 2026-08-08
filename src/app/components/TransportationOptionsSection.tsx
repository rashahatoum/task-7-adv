import ActivityCard from "./ActivityCard";

const TransportationOptionCardsData = [
    {
        imageSrc: "/assets/imgs/Bike.png",
        title: "Bike and rickshaw rental",
        description: "Book your quality vehicle quickly for an hour or all day!",
    },
        {
        imageSrc: "/assets/imgs/Guided.png",
        title: "Guided tour of the countryside",
        description: "Live the real Lucchese experience by visiting the suburbs by bike!",
    },
        {
        imageSrc: "/assets/imgs/Taxi.png",
        title: "Taxi and NCC service",
        description: "Do you need not only a bike but also a driver? Then you have found the right place!",
    },
    {
        imageSrc: "/assets/imgs/Bus.png",
        title: "Bus Package",
        description: "Do you need not only a bike but also a driver? Then you have found the right place!",
    },
];
const TransportationOptionsSection = () => {
    return (
<section className="flex xl:flex-row flex-col items-start justify-start container mx-auto gap-33">
                {TransportationOptionCardsData.map((item,index) => (
                    <div
                        key={index}
                        className="w-full xl:w-[calc(25%-33px)] shrink-0 snap-start min-h-476"
                    >
                        <ActivityCard
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                            imageHeightClass="h-302"
                            gapClass="gap-20"
                        />
                    </div>
                ))}
        </section>
    )
}

export default TransportationOptionsSection