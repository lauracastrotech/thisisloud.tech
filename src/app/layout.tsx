import type { Metadata } from "next";
import { Dangrek, AR_One_Sans } from "next/font/google";
import "./globals.css";

const dangrek = Dangrek({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const arOneSans = AR_One_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loud Tech | Laura Castro",
  description: "Software developer portfolio — Laura Castro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dangrek.variable} ${arOneSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
