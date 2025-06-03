import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StelAI - Chatbot by Mahesh Dhingra",
  description: "A beautiful, modern, and powerful AI chatbot built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 min-h-screen w-full">
        {children}
      </body>
    </html>
  );
}
