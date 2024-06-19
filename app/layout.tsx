import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const imbplexserif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-imb-plex-serif' // create fonts you can use for entire application
})

export const metadata: Metadata = {
  title: "Insertainame",
  description: "Building an AI community!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( // applying those fonts to the entire applciation
    <html lang="en"> 
      <body className={`${inter.variable}${imbplexserif.variable}`}>{children}</body>
    </html>
  );
}
