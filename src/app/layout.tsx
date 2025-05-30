import type { Metadata } from "next";
import { Bayon, } from "next/font/google";
import "./globals.css";

const bayon = Bayon({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bayon',
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Migmag",
  description: "Generated by bd calling it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${bayon.variable} antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
