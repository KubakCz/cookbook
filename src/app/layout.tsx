import type { Metadata } from "next";
import "./globals.css";
import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";

export const metadata: Metadata = {
  title: "Cookbook",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <HeaderBar />
        <main className="flex flex-1">{children}</main>
        <FooterBar />
      </body>
    </html>
  );
}
