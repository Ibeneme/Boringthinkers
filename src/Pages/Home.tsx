import Hero from "./Hero/Hero";
import AboutUs from "../Components/AboutUs/AboutUs";
import FAQPage from "../Components/Faqs/FAQPage";
import AccordionSection from "../Components/AccordionSection/AccordionSection";

const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Hero />
      <AboutUs />
      <AccordionSection />
      <FAQPage />

    </div>
  );
};

export default Home;
