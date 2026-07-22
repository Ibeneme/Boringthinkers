import { Helmet } from "react-helmet-async";
import BlogHero from "../Components/BlogHero/BlogHero";
import BlogComponent from "../Components/BlogHero/BlogComponent";

const BlogPage = () => {
  // Structured Data (JSON-LD) for Blog / CollectionPage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Boring Blog | Software Engineering & Tech Insights",
    url: "https://boringthinkers.com/blog",
    description:
      "Read the latest engineering insights, architectural deep dives, tutorials, and technology updates from the team at Boring Thinkers.",
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
        <title>The Boring Blog | Software Engineering & Tech Insights</title>
        <meta
          name="description"
          content="Explore expert insights, full-stack architectural strategies, and engineering perspectives from the team at Boring Thinkers."
        />
        <link rel="canonical" href="https://boringthinkers.com/blog" />

        {/* Open Graph / Social Sharing Meta Tags */}
        <meta
          property="og:title"
          content="The Boring Blog | Software Engineering & Tech Insights"
        />
        <meta
          property="og:description"
          content="Read technical articles, system design guides, and startup engineering workflows by Boring Thinkers."
        />
        <meta property="og:url" content="https://boringthinkers.com/blog" />
        <meta property="og:type" content="blog" />
        <meta property="og:site_name" content="Boring Thinkers" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Boring Blog | Software Engineering & Tech Insights"
        />
        <meta
          name="twitter:description"
          content="Discover software architecture guides, engineering tips, and updates from Boring Thinkers."
        />

        {/* JSON-LD Structured Data Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <BlogHero title={`"Boring" Blog`} />
      <BlogComponent />
    </div>
  );
};

export default BlogPage;
