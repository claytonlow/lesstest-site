import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LessTest | Testing that scales, without the weight",
  description: "The automated testing framework that actually works for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
