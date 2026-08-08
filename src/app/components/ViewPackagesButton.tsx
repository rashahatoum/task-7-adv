import Link from "next/link";

interface ViewPackagesButtonProps {
    label: string;
    href: string;
}

export default function ViewPackagesButton({ label, href }: ViewPackagesButtonProps) {
    return (
        <Link
            href={href}
            className="inline-block border-[1.5px] border-white hover:bg-[#FFFFFF33]
            text-white px-24 py-14 rounded-full lg:text-xl text-xs
            font-semibold transition-all duration-300 text-center mb-30"
        >
            {label}
        </Link>
    );
}