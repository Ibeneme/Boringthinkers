import Hero from "./Hero/Hero";
import FlagsRow from "./Hero/FlagsRow";
// import OurCompany from "./OurCompany/OurCompany";
import CodeShowcase from "./Hero/CodeShowcase";
import WhatWeBuild from "../Components/AccordionSection/Whatwebuild";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Main Content Container */}
      <div className="max-w-[100vw] mx-auto">
        <Hero />
        <FlagsRow />
        <CodeShowcase />
        {/* <OurCompany /> */}

        {/* WhatWeBuild Section - Safely wrapped */}
        <div className="w-full overflow-hidden">
          <WhatWeBuild />
        </div>



        {/* Uncomment when needed */}
        {/* <NewProjects /> */}
      </div>
    </div>
  );
};

export default Home;
