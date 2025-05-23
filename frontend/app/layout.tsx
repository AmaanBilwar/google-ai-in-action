import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import AuthButtons from '@/components/AuthButtons'
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CivicClima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
              <div className="container mx-auto px-4 h-12 flex items-center justify-end">
                <AuthButtons />
              </div>
            </header>
            <main className="pt-12">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
