import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Lifetime Art",
  description: "Lifetime Art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="max-sm:bg-[var(--background)] ">
          <Navigation />
        </header>
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <footer className="flex w-full bg-white">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
