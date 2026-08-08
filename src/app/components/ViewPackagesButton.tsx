import Link from "next/link";

export default function ViewPackagesButton() {
    return (
        <Link
            href="/#packages"
            className="inline-block border-[1.5px] border-white hover:bg-[#FFFFFF33] 
            text-white px-24 py-14 rounded-full lg:text-xl text-xs 
            font-semibold transition-all duration-300 text-center mb-30"
        >
            View Our Tour Packages
        </Link>
    );
}