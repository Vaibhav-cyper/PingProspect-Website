import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// importing components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PingProspect | Automated Outreach Desktop App",
  description: "PingProspect can automate your Outreach and Generate Leads and Book Meetings using your Facebook.",
  keywords : ["pingprospect", "smma", "facebook DM", "facebook lead gen", "lead generation","facebook DM bot","Facebook prospecting", "Facebook lead generation"],
  alternates: {
    canonical: 'https://www.pingprospect.com',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,  // Allow archiving
    nosnippet: false,
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
