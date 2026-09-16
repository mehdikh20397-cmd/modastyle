import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ModaStyle | استایل، سبک زندگی",
  description: "فروشگاه آنلاین لباس، کفش و اکسسوری",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
