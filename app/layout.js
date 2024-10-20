import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nightingale - Scientific Solutions",
  description: "Explore our wide range of scientific solutions, including chromatography, electrophoresis, molecular biology tools, and research services.",
  keywords: "scientific equipment, research services, chromatography, molecular biology, lab solutions, scientific innovation",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <Head>
          <meta name="robots" content="index, follow" /> 
          <meta name="google-site-verification" content="wEalvhiJwgVLomNqQofGPpVVewqS7NqGf0_Q7GsV8_8" /> 
        </Head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </html>
    </>
  );
}
