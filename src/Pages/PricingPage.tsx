
import { Helmet } from "react-helmet-async";
import BlogHero from "../Components/BlogHero/BlogHero";
import FooterPricing from "../Components/Footer/FooterPricing";
import PricingComponent from "../Components/Pricing/Pricing";

const PricingPage = () => {
  // Structured Data (JSON-LD) for PricingPage / WebPage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pricing & Packages | Boring Thinkers Software Development",
    url: "https://boringthinkers.com/pricing",
    description:
      "Explore transparent pricing and development packages for custom software engineering, mobile apps, web solutions, and digital infrastructure from Boring Thinkers.",
    publisher: {
      "@type": "Organization",
      name: "Boring Thinkers",
      url: "https://boringthinkers.com/",
      logo: "https://boringthinkers.com/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/boring-thinkers/",
        "https://x.com/BoringThinkers",
        "https://www.instagram.com/boringthinkers",
      ],
    },
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Dynamic SEO Meta Data, Open Graph Tags & Structured Data */}
      <Helmet>
        <title>Pricing & Packages | Boring Thinkers Software Development</title>
        <meta
          name="description"
          content="Explore transparent pricing and development packages for custom software engineering, mobile apps, web solutions, and digital infrastructure from Boring Thinkers."
        />
        <link rel="canonical" href="https://boringthinkers.com/pricing" />

        {/* Open Graph / Social Sharing Meta Tags */}
        <meta
          property="og:title"
          content="Pricing & Packages | Boring Thinkers Software Development"
        />
        <meta
          property="og:description"
          content="View our flexible project pricing, maintenance retainers, and custom software development packages tailored for startups and businesses."
        />
        <meta property="og:url" content="https://boringthinkers.com/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Boring Thinkers" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pricing & Packages | Boring Thinkers Software Development"
        />
        <meta
          name="twitter:description"
          content="Discover transparent development rates and custom engineering packages with Boring Thinkers."
        />

        {/* JSON-LD Structured Data Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <BlogHero title={` "Creative Building"`} />
      <PricingComponent />
      <FooterPricing />
      {/* <We /> */}
    </div>
  );
};

export default PricingPage;
