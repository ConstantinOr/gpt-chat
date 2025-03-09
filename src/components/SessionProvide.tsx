"use client"

import { SessionProvider } from "next-auth/react";

export * from "next-auth/react" 

export default function SessionRootLayout({ children }: { children: React.ReactNode }) {
    return (
     
          <SessionProvider>{children}</SessionProvider>
         
    );
}