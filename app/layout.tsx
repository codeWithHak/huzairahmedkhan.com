import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: Change to https://huzairahmedkhan.com once custom domain is connected
  metadataBase: new URL("https://huzairahmedkhan.vercel.app"),
  title: "Huzair Ahmed Khan | Agentic AI Developer",
  description:
    "I don't build chatbots. I build AI employees — autonomous AI agents that reason, plan, and execute complex workflows independently.",
  keywords: [
    "Huzair Ahmed Khan",
    "Agentic AI Developer",
    "ai agents developer",
    "ai automation expert",
    "huzair ahmed khan upwork",
    "AI Developer",
    "Agentic AI",
    "RAG",
    "Multi-Agent Systems",
    "Python",
    "FastAPI",
    "Next.js",
    "AI freelancer",
    "AI engineer Pakistan",
    "autonomous AI agents",
  ],
  authors: [{ name: "Huzair Ahmed Khan" }],
  creator: "Huzair Ahmed Khan",
  publisher: "Huzair Ahmed Khan",
  alternates: {
    // TODO: Change to https://huzairahmedkhan.com once custom domain is connected
    canonical: "https://huzairahmedkhan.vercel.app",
  },
  openGraph: {
    title: "Huzair Ahmed Khan | Agentic AI Developer",
    description: "I don't build chatbots. I build AI employees.",
    type: "website",
    url: "https://huzairahmedkhan.vercel.app",
    siteName: "Huzair Ahmed Khan",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Huzair Ahmed Khan — Agentic AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huzair Ahmed Khan | Agentic AI Developer",
    description: "I don't build chatbots. I build AI employees.",
    creator: "@HuzairK36769348",
    images: [
      {
        url: "/twitter-image",
        width: 1200,
        height: 630,
        alt: "Huzair Ahmed Khan — Agentic AI Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Huzair Ahmed Khan",
      jobTitle: "Agentic AI Developer",
      // TODO: Change to https://huzairahmedkhan.com once custom domain is connected
      url: "https://huzairahmedkhan.vercel.app",
      image: "https://huzairahmedkhan.vercel.app/profile.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressCountry: "PK",
      },
      sameAs: [
        "https://github.com/codeWithHak",
        "https://www.linkedin.com/in/huzair-ahmed-khan/",
        "https://www.facebook.com/profile.php?id=61587263753224",
        "https://www.instagram.com/huzair.01/",
        "https://x.com/HuzairK36769348",
        "https://www.upwork.com/freelancers/~01655224ec78cdc162",
      ],
    },
    {
      "@type": "ProfessionalService",
      name: "Huzair Ahmed Khan — AI Development Services",
      url: "https://huzairahmedkhan.vercel.app",
      provider: {
        "@type": "Person",
        name: "Huzair Ahmed Khan",
      },
      serviceType: [
        "Agentic AI Development",
        "RAG System Development",
        "Multi-Agent System Architecture",
        "AI Automation",
      ],
      areaServed: "Worldwide",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[#BFE600] focus:px-4 focus:py-2 focus:text-black focus:outline-none"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
