import { Geist, Geist_Mono, Zen_Dots } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const zenDots = Zen_Dots({
  variable: "--font-zen-dots-serif",
  weight: '400',
  subsets: ["latin"],
}) 

export const metadata = {
  title: "Cinema",
  description: "Cimena website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div >
        <body className="box-border flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </body>
      </div>
    </html>
  );
}
