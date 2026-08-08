import Image from "next/image";

interface HeroProps {
    title: string;
    subtitle: string;
    image: string;
    children?: React.ReactNode;
    className?: string;
}

const Hero = ({ title, subtitle, image, children, className }: HeroProps) => {
    return (
        <div className="relative pt-[18vh] 
        bg-center h-auto xl:h-screen flex flex-col 
        justify-center items-center text-white text-center
        px-[13vw]">
            <Image
                src={image}
                alt={title}
                fill
                priority 
                className="object-cover -z-10"
            />
            <div className={`${className}`}>
            <h1 className="lg:text-7xl text-5xl font-podcast pb-16">{title}</h1>
            <p className="lg:text-2xl text-base font-bold">{subtitle}</p>
            </div>
            {children && <div className="w-full mt-60">{children}</div>}
        </div>
    )
}

export default Hero