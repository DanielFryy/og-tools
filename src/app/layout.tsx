import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import AdSense from "@/components/AdSense/AdSense";
import AppLayout from "@/components/AppLayout/AppLayout";
import Providers from "@/providers/Providers/Providers";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "OG-Tools",
  description: "Some kind of calculator for OGame game"
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isProduction = process.env.NODE_ENV === "production";
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <AdSense publisherId={publisherId} />
      </head>
      {isProduction ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
