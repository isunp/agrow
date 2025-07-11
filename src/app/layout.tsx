import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// Components
import NavBar from "@/components/home/nav-bar";
import { ThemeProvider } from "@/components/home/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "agrowFarm",
  description:
    "agrowFarm - AI-Powered Agricultural Advice Platform providing personalized agricultural advice to farmers in Nepal.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "agrowFarm",
    "agriculture",
    "AI",
    "farming",
    "Nepal",
    "sustainable agriculture",
    "food security",
  ],
  authors: [
    { name: "isunp ", url: "https://github.com/isunp" },
  ],
  icons: process.env.NODE_ENV === 'production' ? "/agrowFarm/favicon.ico" : "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar></NavBar>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
