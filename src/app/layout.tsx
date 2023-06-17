import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import { Mochiy_Pop_One } from "next/font/google";
import { Roboto_Slab } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const MochiyPopOne = Mochiy_Pop_One({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--PrimaryFont",
});

const RobotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--SecondaryFont",
});

export const metadata = {
  title: "David Urbano",
  description: "Software Engineer - Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/dalowa/david-urbano/f5ca405639740d560f78ebe0e43c9dd3b9c71511/public/favicon.svg"
        />
      </head>
      <body
        className={`${inter.className} ${MochiyPopOne.variable} ${RobotoSlab.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
