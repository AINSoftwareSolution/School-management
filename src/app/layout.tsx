import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";

const inter = Roboto({
  subsets: ["cyrillic"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Wisdom Waves School",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
