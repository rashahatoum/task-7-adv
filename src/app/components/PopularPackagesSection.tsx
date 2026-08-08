import { 
    TicketPercent, 
    UserRound, 
    BusFront,
    MapPin, 
    Tag, 
    Headset,
    Calendar1,
    Tickets
} from 'lucide-react';
import PackageCard from './PackageCard';
import Image from 'next/image';


const packagesData = [
    {
        id: 1,
        image: '/assets/imgs/PackageCard1.png', 
        title: 'BIKE / RICKSHAW',
        price: 10,
        features: [
            { icon: <Calendar1 />, text: 'Your bike for a day' },
            { icon: (<Image src="/assets/icons/map-icon.svg" alt="city-map" width={24} height={24}/>), text: 'City App' },
            { icon: <TicketPercent />, text: 'Discount on Rickshaw' },
            { icon: <Headset />, text: 'Guaranteed Support' },
        ],
    },
    {
        id: 2,
        image: '/assets/imgs/PackageCard2.png', 
        title: 'BIKE TOURS',
        price: 30,
        features: [
            { icon: (<Image src="/assets/icons/mountain-icon.svg" alt="Mountain" width={30} height={30}/>), text: 'A Mountain Bike Included' },
            { icon: (<Image src="/assets/icons/guide-icon.svg" alt="guide" width={24} height={24}/>), text: 'A Guide For You' },
            { icon: (<Image src="/assets/icons/water-icon.svg" alt="water" width={15} height={15}/>), text: 'Bottle of water' },
            { icon: <Headset />, text: 'Guaranteed Support' },
        ],
    },
    {
        id: 3,
        image: '/assets/imgs/PackageCard3.png', 
        title: 'BUS TRIPS',
        price: 45,
        features: [
            { icon: <Tickets />, text: 'Park ticket' },
            { icon: <BusFront />, text: 'Return bus' },
            { icon: (<Image src="/assets/icons/companion-icon.svg" alt="Companion" width={24} height={24}/>), text: 'Companion' },
            { icon: <Headset />, text: 'Guaranteed Support' },
        ],
    },
    {
        id: 4,
        image: '/assets/imgs/PackageCard4.png', 
        title: 'TRANSFER',
        price: 10,
        features: [
            { icon: <UserRound />, text: 'Personal Driver' },
            { icon: <MapPin />, text: 'Wherever You Want' },
            { icon: <Tag />, text: 'At the best price' },
            { icon: <Headset />, text: 'Guaranteed Support' },
        ],
    },
];


export default function PopularPackagesSection() {
    return (
        <section className="w-full" id="packages">
            <div className="mx-auto flex flex-col gap-60">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center lg:text-left">
                    The Most Popular Packages
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 justify-items-center">
                    {packagesData.map((pkg) => (
                        <PackageCard
                            key={pkg.id}
                            image={pkg.image}
                            title={pkg.title}
                            price={pkg.price}
                            features={pkg.features}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    );
}