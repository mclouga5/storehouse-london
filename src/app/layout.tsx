import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

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
  title: "Storehouse London",
  description: "Your Hackney foodbank supporting the local community.",
  keywords: ["foodbank", "Hackney", "London", "Storehouse", "charity", "community support"],
  authors: [{ name: "Storehouse London", url: "https://storehouse-london.vercel.app/" }],
  creator: "Storehouse London",
  openGraph: {
    title: "Storehouse London",
    description: "Your Hackney foodbank supporting the local community.",
    url: "https://storehouse-london.vercel.app/",
    siteName: "Storehouse London",
    images: [
      {
        url: "/media/storehouseLogo.png", // use absolute URL for better OG
        width: 800,
        height: 600,
        alt: "Storehouse London logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/media/storehouseLogo.png" />
        <link
          rel="apple-touch-icon"
          href="/media/storehouseLogo.png"
          sizes="180x180"
        />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <div className=" pt-14 sm:pt-28 bg-white">{children}</div>
      </body>
    </html>
  );
}
