import AboutUs from "../Components/AboutUs/AboutUs";
import BlogHero from "../Components/BlogHero/BlogHero";
import FAQPage from "../Components/Faqs/FAQPage";
import We from "../Components/We/We";
// import Showcase from "./Hero/CodeShowcase";
import Team from "./Hero/Team";
// import We from "../Components/We/We";
// import OurCompany from "./OurCompany/OurCompany";

const AboutUsPage = () => {
  return (
    <div>
      <BlogHero title={`"Boring" Thinkers`} />
      {/* <OurCompany /> */}
      {/* <Showcase /> */}
      <AboutUs />

      <Team />
      <We />
      <FAQPage />
    </div>
  );
};

export default AboutUsPage;
