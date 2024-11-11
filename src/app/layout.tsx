import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import XionAbstraction from "@/provider/xion-abstraction";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "WINU",
  description: "A fantasy gaming app for e-sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-dark text-white`}>
        <NuqsAdapter>
          <Toaster />
          <XionAbstraction>{children}</XionAbstraction>
        </NuqsAdapter>
      </body>
    </html>
  );
}
