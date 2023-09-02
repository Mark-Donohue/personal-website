import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import ActiveSectionContextProvider from "@/components/contexts/ActiveSectionContext";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const globalFont = Noto_Sans({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark Donohue",
  creator: "Mark Donohue",
  viewport: "width=device-width",
  description:
    "Mark Donohue is a back-end API developer with over four years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${globalFont.className} bg-[#F8F8F7] text-gray-950`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
