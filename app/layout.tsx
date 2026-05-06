"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import BottomNav from "@/components/BottomNav";
import EnhancedSidebar from "@/components/common/EnhancedSidebar";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
         {/* Sidebar — hidden on mobile */}
        <EnhancedSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
          <div className="pb-16 md:pb-0">
            {children}
          </div>
        <BottomNav/>
        <Footer />
        </body>
    </html>
  );
}
