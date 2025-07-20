import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MentalModelsProvider } from "../context/mental-models-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mental Models Flashcards",
  description: "A flashcard app for important concepts from Charlie Munger, Nassim Taleb and others.",
  keywords: ["mental models", "flashcards", "Charlie Munger", "Nassim Taleb", "learning", "cognitive tools"],
  authors: [{ name: "Mental Models App" }],
  creator: "Mental Models App",
  publisher: "Mental Models App",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mentalmodels.app'),
  openGraph: {
    title: "Mental Models Flashcards",
    description: "A flashcard app for important concepts from Charlie Munger, Nassim Taleb and others.",
    type: 'website',
    locale: 'en_US',
    siteName: 'Mental Models Flashcards',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mental Models Flashcards",
    description: "A flashcard app for important concepts from Charlie Munger, Nassim Taleb and others.",
    creator: '@mentalmodelsapp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/img/icons/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/icons/favicon-64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      { url: '/img/icons/icon-152x152.png' },
      { url: '/img/icons/icon-192x192.png', sizes: '192x192' },
    ],
    other: [
      { rel: 'mask-icon', url: '/mm-logo.svg', color: '#333333' },
    ],
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#333333',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MentalModelsProvider>
          {children}
        </MentalModelsProvider>
      </body>
    </html>
  );
}
