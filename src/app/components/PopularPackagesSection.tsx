import { ReactNode } from "react";
import Image from "next/image";
import {
    TicketPercent,
    BusFront,
    UserRound,
    MapPin,
    Tag,
    Headset,
    Calendar1,
    Tickets,
} from "lucide-react";
import PackageCard from "./PackageCard";
import { getDictionary } from "@/i18n/dictionaries";

const featureIcons: Record<string, ReactNode> = {
    calendar: <Calendar1 />,
    cityMap: <Image src="/assets/icons/map-icon.svg" alt="" width={24} height={24} />,
    discount: <TicketPercent />,
    support: <Headset />,
    mountain: <Image src="/assets/icons/mountain-icon.svg" alt="" width={30} height={30} />,
    guide: <Image src="/assets/icons/guide-icon.svg" alt="" width={24} height={24} />,
    water: <Image src="/assets/icons/water-icon.svg" alt="" width={15} height={15} />,
    ticket: <Tickets />,
    bus: <BusFront />,
    companion: <Image src="/assets/icons/companion-icon.svg" alt="" width={24} height={24} />,
    driver: <UserRound />,
    location: <MapPin />,
    price: <Tag />,
};

export default async function PopularPackagesSection() {
    const dict = await getDictionary();

    return (
        <section className="w-full" id="packages">
            <div className="mx-auto flex flex-col gap-60">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center lg:text-start">
                    {dict.home.packages.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 justify-items-center">
                    {dict.home.packages.items.map((pkg) => (
                        <PackageCard
                            key={pkg.id}
                            image={pkg.image}
                            title={pkg.title}
                            price={pkg.price}
                            currency={dict.common.currency}
                            perLabel={dict.common.perDay}
                            bookLabel={dict.common.bookNow}
                            features={pkg.features.map((feature) => ({
                                icon: featureIcons[feature.icon],
                                text: feature.text,
                            }))}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
