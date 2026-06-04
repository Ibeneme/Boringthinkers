import BlogHero from "../Components/BlogHero/BlogHero";
import FooterPricing from "../Components/Footer/FooterPricing";
import PricingComponent from "../Components/Pricing/Pricing";

const PricingPage = () => {
  return (
    <div>
      <BlogHero title={` "Creative Building"`} />
      <PricingComponent />
      <FooterPricing />
      {/* <We /> */}
    </div>
  );
};

export default PricingPage;
