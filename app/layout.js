import { Roboto, Work_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const work_sans = Work_Sans({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <Navbar/>
        <div className="m-auto bg-dark_blue">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
