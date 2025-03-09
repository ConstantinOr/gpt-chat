import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SessionRootLayout from "@/components/SessionProvide";
import UserButton from "@/components/UserButton";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS ChatGPT App",
  description: "ChatGPT brought to you by NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  

      <html lang="en">
        <body className="inter.className">

          <header className="text-white font bold bg-green-900 text-2xl">
            <Link href="/"> GPT Vhat</Link>
            <Link href="/about" className="ml-5 font-light">
              About{" "}
            </Link>
            {/* <SessionRootLayout>
             
            </SessionRootLayout> */}
          </header>
          <div className="flex flex-col md:flex-row">         
            <div className="flex-grow">{children}</div>           
          </div>

      </body>
      </html>

  );
}
