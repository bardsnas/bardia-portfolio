import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bardia Nasrulai Portfolio",
  description: "Embedded Systems & Digital Logic Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-white to-slate-100 text-slate-800 font-sans`}
      >
        <div className="max-w-5xl mx-auto px-6 py-6">
        <nav className="mb-10 flex gap-6 text-sm font-medium border-b pb-4">
          <a href="/" className="text-blue-600 hover:underline">About Me</a>
          <a href="/projects" className="text-blue-600 hover:underline">Projects</a>
          <a href="/resume" className="text-blue-600 hover:underline">Resume</a>
        </nav>
          {children}
        </div>
      </body>
    </html>
  );
}

