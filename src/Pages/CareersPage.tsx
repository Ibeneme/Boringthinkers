
import { Helmet } from "react-helmet-async";
import BlogHero from "../Components/BlogHero/BlogHero";
import Careers from "../Components/Careers/Careers";

const CareerPage = () => {
  // Structured Data (JSON-LD) for CareerPage / Organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Careers & Open Positions | Boring Thinkers",
    url: "https://boringthinkers.com/careers",
    description:
      "Join the engineering team at Boring Thinkers. Explore open roles and career opportunities in custom software development, full-stack engineering, and UI/UX design.",
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
        <title>Careers & Open Positions | Boring Thinkers</title>
        <meta
          name="description"
          content="Join the elite engineering team at Boring Thinkers. Discover career opportunities and help us build scalable digital products and software solutions."
        />
        <link rel="canonical" href="https://boringthinkers.com/careers" />

        {/* Open Graph / Social Sharing Meta Tags */}
        <meta
          property="og:title"
          content="Careers & Open Positions | Boring Thinkers"
        />
        <meta
          property="og:description"
          content="Explore career opportunities and open engineering roles at Boring Thinkers."
        />
        <meta property="og:url" content="https://boringthinkers.com/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Boring Thinkers" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Careers & Open Positions | Boring Thinkers"
        />
        <meta
          name="twitter:description"
          content="Build your software engineering career with Boring Thinkers."
        />

        {/* JSON-LD Structured Data Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <BlogHero title="Careers" />
      <Careers />
    </div>
  );
};

export default CareerPage;
