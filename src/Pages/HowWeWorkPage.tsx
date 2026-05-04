import FAQPage from "../Components/Faqs/FAQPage";
import HowWeWorkComponent from "../Components/HowWeWorkComponent/HowWeWorkComponent";
import BlogHero from "../Components/BlogHero/BlogHero";

const HowWeWorkPage = () => {
  return (
    <div>
      <BlogHero title={`Start Building `} />
      <HowWeWorkComponent />
      <FAQPage />
    </div>
  );
};

export default HowWeWorkPage;
