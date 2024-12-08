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
  description: "Your Hackney foodbank",
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
