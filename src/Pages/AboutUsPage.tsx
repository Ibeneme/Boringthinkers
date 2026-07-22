import { Helmet } from "react-helmet-async";
import AboutUs from "../Components/AboutUs/AboutUs";
import BlogHero from "../Components/BlogHero/BlogHero";
import FAQPage from "../Components/Faqs/FAQPage";
import We from "../Components/We/We";
// import Showcase from "./Hero/CodeShowcase";
import Team from "./Hero/Team";
// import We from "../Components/We/We";
import OurCompany from "./OurCompany/OurCompany";

const AboutUsPage = () => {
  // Structured Data (JSON-LD) for AboutPage / Organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us | Boring Thinkers Software Engineering",
    url: "https://boringthinkers.com/about-us",
    description:
      "Learn about Boring Thinkers, our engineering team, our culture of disciplined building, and our mission to deliver elite custom software solutions.",
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
        <title>About Us | Boring Thinkers Software Engineering</title>
        <meta
          name="description"
          content="Discover the team and story behind Boring Thinkers. We are elite software engineers and technology partners dedicated to building scalable digital products."
        />
        <link rel="canonical" href="https://boringthinkers.com/about-us" />

        {/* Open Graph / Social Sharing Meta Tags */}
        <meta
          property="og:title"
          content="About Us | Boring Thinkers Software Engineering"
        />
        <meta
          property="og:description"
          content="Learn about Boring Thinkers, our engineering team, our culture of disciplined building, and our mission to deliver elite custom software solutions."
        />
        <meta property="og:url" content="https://boringthinkers.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Boring Thinkers" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Boring Thinkers Software Engineering"
        />
        <meta
          name="twitter:description"
          content="Meet the minds behind Boring Thinkers and explore our software development philosophy."
        />

        {/* JSON-LD Structured Data Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <BlogHero title={`"Boring" Thinkers`} />
      <OurCompany />
      {/* <Showcase /> */}
      <AboutUs />

      <Team />
      <We />
      <FAQPage />
    </div>
  );
};

export default AboutUsPage;
