import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fly Next",
  description: "Your trusted partner for study abroad opportunities",
  icons: {
    icon: [
      { url: '/browser.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/browser.png', type: 'image/png' },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
