import CustomButton from "./CustomButton";

interface OfferCardProps {
    title: string;
    desc: string;
}

const OfferCard = ({ title, desc }: OfferCardProps) => {
    return (
        <div className="w-full max-w-569 flex flex-col gap-32 items-center justify-center bg-[#FFFFFF4D] rounded-3xl py-30 px-42">
            <h2 className="text-main-text text-xl lg:text-[32px] font-extrabold text-center">{title}</h2>
            <p className="text-main-text lg:text-lg text-base text-center">{desc}</p>
            <CustomButton
                className="w-full max-w-212 px-40 py-12 bg-main-orange text-white rounded-full transition-colors shadow-md"
            >
                Contact Us
            </CustomButton>
        </div>
    )
}

export default OfferCard