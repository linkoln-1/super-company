import React from "react";
import { CartProvider } from "@/context/CartContext";
import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "SUPERCOMPANY",
  description: "SUPERCOMPANY",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Header />
          <div id="root" className="flex-grow">
            {children}
          </div>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
