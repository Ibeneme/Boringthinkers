import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const globalStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Boring Thinkers",
  alternateName: "Boring Thinkers Limited",
  url: "https://boringthinkers.com",
  logo: "https://boringthinkers.com/logo.png",
  founder: {
    "@type": "Person",
    name: "Ikenna Ibeneme",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-812-071-0198",
    contactType: "customer service",
    email: "admin@boringthinkers@com",
    areaServed: "Worldwide",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/boring-thinkers/",
    "https://x.com/BoringThinkers",
    "https://www.instagram.com/boringthinkers",
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <html lang="en" />
        <title>
          Boring Thinkers | Custom Software Architecture & Digital Product
          Design
        </title>
        <meta
          name="description"
          content="Boring Thinkers delivers custom full-stack software architecture, high-end digital product design, and industrial infrastructure scaling for startups and enterprises."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://boringthinkers.com/" />

        {/* Open Graph / Social Defaults */}
        <meta property="og:site_name" content="Boring Thinkers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boringthinkers.com/" />
        <meta
          property="og:title"
          content="Boring Thinkers | Custom Software Architecture & Digital Product Design"
        />
        <meta
          property="og:description"
          content="Engineering custom full-stack software architectures and premium digital products."
        />
        <meta
          property="og:image"
          content="https://boringthinkers.com/og-image.png"
        />

        {/* Twitter Card Defaults */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BoringThinkers" />
        <meta
          name="twitter:title"
          content="Boring Thinkers | Custom Software Architecture"
        />
        <meta
          name="twitter:description"
          content="Engineering high-performance software systems and digital experiences."
        />
        <meta
          name="twitter:image"
          content="https://boringthinkers.com/og-image.png"
        />

        {/* Global Organization JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(globalStructuredData)}
        </script>
      </Helmet>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
