import AboutSection from "@/app/components/AboutSection";
import BackgroundSection from "@/app/components/BackgroundSection";
import BikeBookingForm from "@/app/components/BikeBookingForm";
import CustomersSaysSection from "@/app/components/CustomersSaysSection";
import Hero from "@/app/components/Hero";
import OfferCard from "@/app/components/OfferCard";
import PopularDestinationsSection from "@/app/components/PopularDestinationsSection";
import PopularPackagesSection from "@/app/components/PopularPackagesSection";
import TourSearchForm from "@/app/components/TourSearchForm";
import TransportationOptionsSection from "@/app/components/TransportationOptionsSection";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home() {
  const dict = await getDictionary();

  return (
    <>
      <Hero
        image="/assets/imgs/hero-bg.png"
        title={dict.home.hero.title}
        subtitle={dict.home.hero.subtitle}
      >
        <TourSearchForm dict={dict.search} searchLabel={dict.common.search} />
      </Hero>

      <div className="pt-120 px-[13vw]">
        <PopularDestinationsSection />
      </div>

      <div className="pt-120 px-[13vw] mb-0 lg:mb-120">
        <AboutSection
          subTitle={dict.home.about.subTitle}
          title={dict.home.about.title}
          description={dict.home.about.description}
          imageSrc="/assets/imgs/about-picture.png"
          stats={dict.home.stats}
          imgDimensions="w-full max-w-450"
        />
      </div>

      <div className="pt-120">
        <BackgroundSection
          className="py-20 md:py-0 items-center h-auto lg:h-450"
          OfferStyle="bottom-0 start-0 w-full"
          bgImg="/assets/imgs/offer-bg.png"
          image="/assets/imgs/girl-picture.png"
          imgPosition="w-full lg:max-w-472 self-end"
          imgAlt="girl"
          imgWidth={427}
          imgHeight={600}
        >
          <OfferCard
            title={dict.home.offer.title}
            desc={dict.home.offer.description}
            buttonLabel={dict.home.offer.button}
          />
        </BackgroundSection>
      </div>

      <div className="pt-120 px-[13vw]">
        <TransportationOptionsSection />
      </div>

      <div className="pt-120">
        <BackgroundSection
          className="py-20 md:py-60 items-center"
          bgImg="/assets/imgs/book-bg.png"
          title={dict.home.booking.title}
          image="/assets/imgs/bike-picture.png"
          imgAlt="Bike"
          imgWidth={724}
          imgHeight={542}
          imgPosition="w-full lg:max-w-724px self-center lg:self-end lg:translate-y-100"
        >
          <BikeBookingForm dict={dict.bookingForm} />
        </BackgroundSection>
      </div>

      <div className="pt-120 px-[13vw]">
        <PopularPackagesSection />
      </div>

      <div className="pt-120 px-[13vw]">
        <CustomersSaysSection />
      </div>
    </>
  );
}
