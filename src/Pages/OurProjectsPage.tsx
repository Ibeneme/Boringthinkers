
import { Helmet } from "react-helmet-async";
import WhatWeBuild from "../Components/AccordionSection/Whatwebuild";
import BlogHero from "../Components/BlogHero/BlogHero";
import NewProjects from "../Components/NewProjects/Projects";
// import Showcase from "./Hero/CodeShowcase";

const OurProjectsPage = () => {
  // Structured Data (JSON-LD) for CollectionPage / Portfolio
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Projects | Recent Software Engineering & Digital Products",
    url: "https://boringthinkers.com/projects",
    description:
      "Explore recent software engineering projects and digital products built by Boring Thinkers, including high-performance web apps, mobile solutions, and scalable platforms.",
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
          Our Projects | Recent Software Engineering & Digital Products
        </title>
        <meta
          name="description"
          content="Explore recent software engineering projects and digital products built by Boring Thinkers, including high-performance web apps, mobile solutions, and scalable platforms."
        />
        <link rel="canonical" href="https://boringthinkers.com/projects" />

        {/* Open Graph / Social Sharing Meta Tags */}
        <meta
          property="og:title"
          content="Our Projects | Recent Software Engineering & Digital Products"
        />
        <meta
          property="og:description"
          content="Browse our portfolio of custom software solutions, modern mobile applications, and robust digital infrastructure engineered by Boring Thinkers."
        />
        <meta property="og:url" content="https://boringthinkers.com/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Boring Thinkers" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Projects | Recent Software Engineering & Digital Products"
        />
        <meta
          name="twitter:description"
          content="Discover robust web and mobile applications engineered by Boring Thinkers."
        />

        {/* JSON-LD Structured Data Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <BlogHero title={`Recent Engineerings`} />
      <NewProjects />
      {/* <Showcase /> */}
      <WhatWeBuild />
    </div>
  );
};

export default OurProjectsPage;
