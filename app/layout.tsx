import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./(routes)/components/Menu/Header";
import Footer from "./(routes)/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { siteMetadata } from "@/lib/siteMetadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  // Sosyal medyada düzgün görüntülenebilmesi için openFraph kullanılır.
  openGraph: {
    type: "website",
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner],
    locale: "en-US",
    siteName: siteMetadata.title,
  },
  // sitemizin arma motorlarında görünmesi için yapılan ayarlar
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  // twitter ayarları
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="min-h-screen ">{children}</div>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
