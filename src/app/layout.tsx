import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Inter, Fira_Code, Roboto_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--fontInter" });
const FiraCode = Fira_Code({ subsets: ["latin"], variable: "--fontFiraCode" });

const RobotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--fontRobotoMono",
});

export const metadata = {
  title: "David Urbano",
  description: "Web Developer - Software Engineer Student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/dalowa/david-urbano/main/public/profile.png"
        />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/dalowa/david-urbano/cb99741e256698f6151e2ba880a8aa50723d6eeb/public/new-d.svg"
        />
      </head>
      <body
        className={`${inter.variable} ${FiraCode.variable} ${RobotoMono.variable}} bg-ColorAzulMarino`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
