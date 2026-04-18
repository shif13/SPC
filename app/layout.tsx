import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jesudoss Jeyapaul Ministries | Church in Chennai",
  description:
    "Experience the transforming power of God's Word. Join us for Sunday services, watch sermons online, and grow in faith with Jesudoss Jeyapaul Ministries.",
  keywords: ["church Chennai", "Tamil church", "sermons online", "Jesudoss Jeyapaul"],
  openGraph: {
    title: "Jesudoss Jeyapaul Ministries",
    description: "Experience the transforming power of God's Word.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}