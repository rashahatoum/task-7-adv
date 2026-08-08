import ActivityCard from "./ActivityCard";
import Slider from "./Slider";

const ActivityCardsData = [
    {
        imageSrc: "/assets/imgs/lucca-bike.png",
        title: "Lucca Bike Tour",
        price: 34,
        schedule: "EVERY DAY",
        capacity: "3-10 PP",
        description: "A tour of the city and its surroundings led by a professional guide ...",
    },
    {
        imageSrc: "/assets/imgs/wine-tasting.png",
        title: "Wine tasting In Tuscany",
        price: 34,
        schedule: "MONDAY",
        capacity: "10-30 PP",
        description: "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
    },
    {
        imageSrc: "/assets/imgs/cinque-terre.png",
        title: "Cinque Terre Tour",
        price: 34,
        schedule: "TO BE DECIDED",
        capacity: "10-50 PP",
        description: "Visiting the 5 Terre is a must, and you can never go there enough ...",
    },
    {
        imageSrc: "/assets/imgs/siena.png",
        title: "Siena and Surroundings",
        price: 34,
        schedule: "TO BE DECIDED",
        capacity: "5-10 PP",
        description: "Visit the beautiful Siena and the cities that surround it to experience ...",
    },
        {
        imageSrc: "/assets/imgs/lucca-bike.png",
        title: "Lucca Bike Tour",
        price: 34,
        schedule: "EVERY DAY",
        capacity: "3-10 PP",
        description: "A tour of the city and its surroundings led by a professional guide ...",
    },
    {
        imageSrc: "/assets/imgs/wine-tasting.png",
        title: "Wine tasting In Tuscany",
        price: 34,
        schedule: "MONDAY",
        capacity: "10-30 PP",
        description: "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
    },
    {
        imageSrc: "/assets/imgs/cinque-terre.png",
        title: "Cinque Terre Tour",
        price: 34,
        schedule: "TO BE DECIDED",
        capacity: "10-50 PP",
        description: "Visiting the 5 Terre is a must, and you can never go there enough ...",
    },
    {
        imageSrc: "/assets/imgs/siena.png",
        title: "Siena and Surroundings",
        price: 34,
        schedule: "TO BE DECIDED",
        capacity: "5-10 PP",
        description: "Visit the beautiful Siena and the cities that surround it to experience ...",
    },
];

function PopularDestinationsSection() {
    return (
        <section className="container mx-auto">
            <Slider title="Explore Our Popular Destinations" className="gap-33">
                {ActivityCardsData.map((item,index) => (
                    <div
                        key={index}
                        className="w-full xl:w-[calc(25%-33px)] shrink-0 snap-start"
                    >
                        <ActivityCard
                            imageSrc={item.imageSrc}
                            title={item.title}
                            price={item.price}
                            schedule={item.schedule}
                            capacity={item.capacity}
                            description={item.description}
                            imageHeightClass="h-404"
                            gapClass="gap-16"
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default PopularDestinationsSection;