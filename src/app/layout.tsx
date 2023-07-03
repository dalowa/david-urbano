import "./globals.css";
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
  image:
    "https://raw.githubusercontent.com/dalowa/david-urbano/main/public/profile.png",
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
          href="https://raw.githubusercontent.com/dalowa/david-urbano/cb99741e256698f6151e2ba880a8aa50723d6eeb/public/new-d.svg"
        />
      </head>
      <body
        className={`${inter.variable} ${FiraCode.variable} ${RobotoMono.variable}} bg-ColorAzulMarino`}
      >
        {children}
      </body>
    </html>
  );
}
