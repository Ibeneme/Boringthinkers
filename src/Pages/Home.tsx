import { Helmet } from "react-helmet-async";
import Hero from "./Hero/Hero";
import FlagsRow from "./Hero/FlagsRow";
import CodeShowcase from "./Hero/CodeShowcase";
import WhatWeBuild from "../Components/AccordionSection/Whatwebuild";

export default function Home() {
  // Structured Data (JSON-LD) for SoftwareHouse with verified social profiles
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Boring Thinkers",
    url: "https://boringthinkers.com/",
    logo: "https://boringthinkers.com/logo.png",
    description:
      "Boring Thinkers is an elite software development company building scalable web applications, native mobile apps, and robust digital platforms.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Port Harcourt",
      addressCountry: "NG",
    },
    sameAs: [
      "https://www.linkedin.com/company/boring-thinkers/",
      "https://x.com/BoringThinkers",
      "https://www.instagram.com/boringthinkers",
    ],
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Dynamic SEO Meta Data, Open Graph Tags & Structured Data */}
      <Helmet>
        <title>
          Boring Thinkers | Custom Software Development & Digital Engineering
        </title>
        <meta
          name="description"
          content="Boring Thinkers is an elite software development company building scalable web applications, native mobile apps, and robust digital platforms that drive business growth."
        />
        <link rel="canonical" href="https://boringthinkers.com/" />

        {/* Open Graph / Social Sharing Meta Tags */}
        <meta
          property="og:title"
          content="Boring Thinkers | Custom Software Development & Digital Engineering"
        />
        <meta
          property="og:description"
          content="Transform your complex ideas into high-performance applications. We deliver expert software engineering, mobile development, and modern scalable tech products."
        />
        <meta property="og:url" content="https://boringthinkers.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Boring Thinkers" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Boring Thinkers | Custom Software Development & Digital Engineering"
        />
        <meta
          name="twitter:description"
          content="Build scalable web and mobile apps with Boring Thinkers. Elite software engineering and digital solutions."
        />

        {/* JSON-LD Structured Data Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Main Content Container */}
      <div className="max-w-[100vw] mx-auto">
        <Hero />
        <FlagsRow />
        <CodeShowcase />
        {/* <OurCompany /> */}

        {/* WhatWeBuild Section - Safely wrapped */}
        <div className="w-full overflow-hidden">
          <WhatWeBuild />
        </div>

        {/* Uncomment when needed */}
        {/* <NewProjects /> */}
      </div>
    </div>
  );
}
