
import { Helmet } from "react-helmet-async";
import FAQPage from "../Components/Faqs/FAQPage";
import HowWeWorkComponent from "../Components/HowWeWorkComponent/HowWeWorkComponent";
import BlogHero from "../Components/BlogHero/BlogHero";

const HowWeWorkPage = () => {
  // Structured Data (JSON-LD) for HowWeWork Page (WebPage / Breadcrumb / Organization)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How We Work | Boring Thinkers Software Engineering Process",
    url: "https://boringthinkers.com/how-we-work",
    description:
      "Discover the structured, agile software development process at Boring Thinkers. From initial discovery to scalable deployment, learn how we build high-impact digital products.",
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
        <title>
          How We Work | Boring Thinkers Software Engineering Process
        </title>
        <meta
          name="description"
          content="Discover the structured, agile software development process at Boring Thinkers. From initial discovery to scalable deployment, learn how we build high-impact digital products."
        />
        <link rel="canonical" href="https://boringthinkers.com/how-we-work" />

        {/* Open Graph / Social Sharing Meta Tags */}
        <meta
          property="og:title"
          content="How We Work | Boring Thinkers Software Engineering Process"
        />
        <meta
          property="og:description"
          content="Explore our proven workflow, agile methodologies, and engineering lifecycle designed to turn complex business requirements into robust tech solutions."
        />
        <meta
          property="og:url"
          content="https://boringthinkers.com/how-we-work"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Boring Thinkers" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How We Work | Boring Thinkers Software Engineering Process"
        />
        <meta
          name="twitter:description"
          content="Learn how Boring Thinkers designs, builds, and scales custom software products for businesses worldwide."
        />

        {/* JSON-LD Structured Data Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <BlogHero title={`Start Building `} />
      <HowWeWorkComponent />
      <FAQPage />
    </div>
  );
};

export default HowWeWorkPage;
