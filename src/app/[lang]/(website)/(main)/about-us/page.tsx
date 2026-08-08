import AboutSection from '@/app/components/AboutSection';
import Hero from '@/app/components/Hero'
import ViewPackagesButton from '@/app/components/ViewPackagesButton'
import { statsData } from '../page';
import CustomersSaysSection from '@/app/components/CustomersSaysSection';
import FeaturesSection, { FeatureCard } from '@/app/components/FeaturesSection';
import Image from 'next/image';

export function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ar' }];
}

const featuresData: FeatureCard[] = [
{
    title: "Complete Packages For All Your Wishes",
    icon: (
        <Image
            src="/assets/icons/icon_map.svg"
            alt="Packages"
            width={60}
            height={60}
        />
    )
},
{
    title: "Over 30 Years Of Experience",
        icon: (
        <Image
            src="/assets/icons/icon_experience.svg"
            alt="Tour Icon"
            width={60}
            height={60}
        />
    )
},
{
    title: "Expert Guides For You",
        icon: (
        <Image
            src="/assets/icons/icon_guide.svg"
            alt="Tour Icon"
            width={60}
            height={60}
        />
    )
},
{
    title: "Guaranteed fun at the best price",
        icon: (
        <Image
            src="/assets/icons/icon_best_price.svg"
            alt="Tour Icon"
            width={60}
            height={60}
        />
    )
}
];

const about = () => {
    return (
        <>
            <Hero
                image="/assets/imgs/about-hero-bg.png"
                title="Our team cares about your full relax"
                subtitle="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
                className="w-full max-w-943"
            >
                <ViewPackagesButton />
            </Hero>
            <div className="pt-120 px-[13vw]">
                <AboutSection
                    subTitle="WELCOME TO OUR SITE!"
                    title="We Are The Center Of Lucca To Offer You The Best"
                    description="We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"
                    imageSrc="/assets/imgs/about-picture-2.png"
                    stats={statsData}
                    imgDimensions="w-full max-w-650"
                />
            </div>
            <div className="pt-120">
                <FeaturesSection
                    bgImage="/assets/imgs/features-bg.png"
                    features={featuresData}
                    className='px-[13vw] py-83'
                />
            </div>
            <div className="pt-120 px-[13vw]">
                <CustomersSaysSection />
            </div>

        </>
    )
}

export default about