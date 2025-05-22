import AboutUs from "../Components/AboutUs/AboutUs";
import BlogHero from "../Components/BlogHero/BlogHero";
import We from "../Components/We/We";
import OurCompany from "./OurCompany/OurCompany";

const AboutUsPage = () => {
  return (
    <div>
      <BlogHero title={`The "Boring" Thinkers`} />
      <OurCompany />
      <AboutUs />
      <We />
    </div>
  );
};

export default AboutUsPage;
