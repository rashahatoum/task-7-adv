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

export const statsData = [
  { number: "20+", label: "Years Experience" },
  { number: "100+", label: "Happy Customer" },
  { number: "15+", label: "Choice of Services" },
  { number: "10+", label: "Professional Guides" },
];

export default function Home() {
  return (
    <>
      <Hero
        image="/assets/imgs/hero-bg.png"
        title="Enjoy in the best way!"
        subtitle="Enjoy our services for your trip anytime"
      >
        <TourSearchForm />
      </Hero>
      <div className="pt-120 px-[13vw]">
        <PopularDestinationsSection />
      </div>
      <div className="pt-120 px-[13vw] mb-0 lg:mb-120">
        <AboutSection
          subTitle="WELCOME TO OUR SITE!"
          title="We are the best company for your visit"
          description="After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!"
          imageSrc="/assets/imgs/about-picture.png"
          stats={statsData}
          imgDimensions="w-full max-w-450"
        />
      </div>
      <div className="pt-120">
        <BackgroundSection
        className="py-20 md:py-0 items-center h-auto lg:h-450"
        OfferStyle="bottom-0 left-0 w-full"
          bgImg="/assets/imgs/offer-bg.png"
          image="/assets/imgs/girl-picture.png"
          imgPosition="w-full lg:max-w-472 self-end"
          imgAlt="girl"
          imgWidth={427}
          imgHeight={600}
          children={<OfferCard
            title="Get Special Offers for Organizations"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />}
        />
      </div>
      <div className="pt-120 px-[13vw]">
        <TransportationOptionsSection />
      </div>
      <div className="pt-120">
        <BackgroundSection
          className="py-20 md:py-60 items-center"
          bgImg="/assets/imgs/book-bg.png"
          title="Book Now Bike"
          image="/assets/imgs/bike-picture.png"
          imgAlt="Bike"
          imgWidth={724}
          imgHeight={542}
          imgPosition="w-full lg:max-w-724px self-center lg:self-end lg:translate-y-100"
          children={<BikeBookingForm />}
        />
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
