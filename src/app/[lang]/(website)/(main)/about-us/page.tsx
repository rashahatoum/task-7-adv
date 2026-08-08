import { ReactNode } from "react";
import Image from "next/image";
import AboutSection from "@/app/components/AboutSection";
import Hero from "@/app/components/Hero";
import ViewPackagesButton from "@/app/components/ViewPackagesButton";
import CustomersSaysSection from "@/app/components/CustomersSaysSection";
import FeaturesSection, { FeatureCard } from "@/app/components/FeaturesSection";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

const featureIcons: Record<string, ReactNode> = {
    map: <Image src="/assets/icons/icon_map.svg" alt="" width={60} height={60} />,
    experience: <Image src="/assets/icons/icon_experience.svg" alt="" width={60} height={60} />,
    guide: <Image src="/assets/icons/icon_guide.svg" alt="" width={60} height={60} />,
    bestPrice: <Image src="/assets/icons/icon_best_price.svg" alt="" width={60} height={60} />,
};

export default async function AboutPage() {
    const dict = await getDictionary();
    const lang = await getLocale();

    const featuresData: FeatureCard[] = dict.about.features.map((feature) => ({
        title: feature.title,
        icon: featureIcons[feature.icon],
    }));

    return (
        <>
            <Hero
                image="/assets/imgs/about-hero-bg.png"
                title={dict.about.hero.title}
                subtitle={dict.about.hero.subtitle}
                className="w-full max-w-943"
            >
                <ViewPackagesButton
                    label={dict.about.viewPackages}
                    href={`/${lang}#packages`}
                />
            </Hero>

            <div className="pt-120 px-[13vw]">
                <AboutSection
                    subTitle={dict.about.section.subTitle}
                    title={dict.about.section.title}
                    description={dict.about.section.description}
                    imageSrc="/assets/imgs/about-picture-2.png"
                    stats={dict.home.stats}
                    imgDimensions="w-full max-w-650"
                />
            </div>

            <div className="pt-120">
                <FeaturesSection
                    bgImage="/assets/imgs/features-bg.png"
                    features={featuresData}
                    className="px-[13vw] py-83"
                />
            </div>

            <div className="pt-120 px-[13vw]">
                <CustomersSaysSection />
            </div>
        </>
    );
}
