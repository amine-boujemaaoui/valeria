import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valeria",
  description: "Valeria is a clothing store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <CartProvider>
            <Navbar />
            <ShoppingCartModal />
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
