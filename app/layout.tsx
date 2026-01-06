import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Home/Header/Header";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import Breadcrumb from "@/components/Helper/breadcrumb";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ApexPipe - Building America's Future",
  description:
    "Premium water pipes and plumbing solutions for residential and industrial applications",
  keywords: [
    "PVC pipes",
    "Pipe Company",
    "Water Pipes",
    "plumbing",
    "industrial plumbing",
    "residential pipes",
    "construction pipes",
    "water pipe solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${oswald.variable} ${geistSans.variable} ${geistMono.variable} font-open-sans antialiased bg-white text-[#67737e] leading-1.5`}
      >
        <Header />
        <Breadcrumb />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
