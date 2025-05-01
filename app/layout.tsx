import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
// importing components
import Navbar from "../components/Navbar"
import Footer from "../components/FooterComponent/Footer";

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
      <head>
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', "${process.env.NEXT_PUBLIC_TAG}");</script>
        <!-- End Google Tag Manager -->
      </head>
      <body
        
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src=`https://www.googletagmanager.com/ns.html?${process.env.NEXT_PUBLIC_TAG}`
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
          
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
