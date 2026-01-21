import type { Metadata } from "next";
import { Noto_Serif_Bengali, Roboto } from "next/font/google";
import "./globals.css";

const enFont = Roboto({
  subsets: ["latin"],
});

const bnFont = Noto_Serif_Bengali({
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  title: "Daccapost - Frontend Task : DahakaPost",
  description:
    "Made by Al Rakib (https://alrakib.is-a.dev): Frontend Task of DahakaPost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${enFont.className} ${bnFont.className} select-none`}>
        {children}
      </body>
    </html>
  );
}
