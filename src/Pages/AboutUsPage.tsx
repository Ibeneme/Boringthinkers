import AboutUs from "../Components/AboutUs/AboutUs";
import BlogHero from "../Components/BlogHero/BlogHero";
import FAQPage from "../Components/Faqs/FAQPage";
import Showcase from "./Hero/CodeShowcase";
// import We from "../Components/We/We";
import OurCompany from "./OurCompany/OurCompany";

const AboutUsPage = () => {
  return (
    <div>
      <BlogHero title={`"Boring" Thinkers`} />
      <OurCompany />
      <Showcase />
      <AboutUs />
      <FAQPage />
    </div>
  );
};

export default AboutUsPage;
