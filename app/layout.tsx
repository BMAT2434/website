import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BMAT2434 | Portfolio",
  description: "Student portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </main>
          <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} BMAT2434. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
