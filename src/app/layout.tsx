import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
      <body className={`bg-ColorAzulMarino`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
