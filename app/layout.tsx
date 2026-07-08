import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import DoodleLine from "@/components/DoodleLine";
import { CmsProvider } from "@/lib/cms";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MHB Ouders Weert",
  description:
    "De plek waar ouders van hoogbegaafde kinderen in Midden-Limburg samenkomen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="relative min-h-screen">
        <CmsProvider>
          <DoodleLine />
          <div className="relative z-10">{children}</div>
        </CmsProvider>
      </body>
    </html>
  );
}
