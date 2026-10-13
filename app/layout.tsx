import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Youth Challenge Club | Building Stronger Communities",
  description:
    "Youth Challenge Club brings people together to support young people, assist vulnerable communities, support children's homes, and improve shared community spaces.",
  applicationName: "Youth Challenge Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className="min-h-screen bg-[#f7f6f0] font-sans text-[#1d3028] antialiased selection:bg-[#d7b76d] selection:text-[#1d3028]">
        {children}
      </body>
    </html>
  );
}
