import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tuscany | Discover & Book Your Next Adventure",
  description: "Explore popular destinations, book guided tours, rent bikes, and plan your dream trip to Tuscany with our all-in-one travel platform.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return children;
}
