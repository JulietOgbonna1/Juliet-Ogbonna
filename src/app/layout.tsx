import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { site } from "@/lib/data";
import "./globals.css";

const sora = localFont({
  src: "../fonts/sora.woff2",
  variable: "--font-sora",
  weight: "100 800",
  display: "swap",
});
const manrope = localFont({
  src: "../fonts/manrope.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Juliet Ogbonna",
    "Frontend Developer",
    "Frontend Developer Nigeria",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Web Developer Enugu",
    "UI Developer",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: `${site.name} Portfolio`,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2e6ce" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0605" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  image: `${site.url}/images/juliet.jpg`,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Enugu", addressCountry: "NG" },
  alumniOf: "University of Nigeria",
  worksFor: { "@type": "Organization", name: "Verbum Networks Limited" },
  knowsAbout: ["HTML5", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
  sameAs: Object.values(site.socials),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${manrope.variable}`}>
      <body className="bg-atmos min-h-dvh overflow-x-hidden antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Providers>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-on-brand">
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
