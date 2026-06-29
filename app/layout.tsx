import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Floe UI Kit",
  description: "The Sentient Monolith.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontHeading.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
