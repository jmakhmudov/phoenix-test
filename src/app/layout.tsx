import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "YUMA Bio",
  description: "YUMA Bio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <body className="font-roboto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
