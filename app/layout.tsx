import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dave's Blog",
  description: "Generated by Kelvin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark:bg-slate-800 ${geistSans.variable} ${geistMono.variable}`}
      >
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
