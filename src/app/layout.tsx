import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import "tailwindcss/index.css";

//Custom import
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITeach",
  description:
    "Established in 1997, I-Tech Institute of Computers is a premier IT training organization with over 25 years of excellence in providing top-notch education in technology and computing. Renowned for its expert trainers, certified engineers with extensive industry experience, I-Tech is committed to creating highly skilled professionals who meet the ever-growing demands of the IT industry. With a mission to create skilled professionals who meet the IT industry's growing demands, I-Tech offers a wide range of certified courses, including programming, web development, Artificial Intelligence, Data Analytics, and UI/UX Designing, alongside advanced training in Networking, Cisco, VMware, and Citrix. With a strong focus on practical learning through real-time projects and an emphasis on accessibility with affordable pricing, we empower individuals to thrive in the digital era. Whether you’re a beginner or a professional, I-Tech equips you with the skills to succeed in a rapidly evolving tech landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-inter ${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-primary-forground`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
