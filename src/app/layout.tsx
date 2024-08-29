import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenseibyte",
  description: "Stay Study - Master the Art of Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen bg-gray-900 text-gray-100 flex flex-col`}>
          <Header />
          <main className="flex-grow">
            <div className="max-w-6xl mx-auto px-4 py-8">
              {children}
            </div>
          </main>
          <footer className="bg-gray-800 mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-4 text-center text-gray-400">
              © 2024 Kenseibyte. Stay Study.
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}