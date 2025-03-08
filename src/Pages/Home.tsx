import Hero from "./Hero/Hero";
import OurCompany from "./OurCompany/OurCompany";
import AboutUsComponent from "../Components/About/About";

const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Hero />
      <OurCompany />
      <AboutUsComponent />
    </div>
  );
};

export default Home;
