import WhatWeBuild from "../Components/AccordionSection/Whatwebuild";
import BlogHero from "../Components/BlogHero/BlogHero";
import NewProjects from "../Components/NewProjects/Projects";
// import Showcase from "./Hero/CodeShowcase";

const OurProjectsPage = () => {
  return (
    <div>
      <BlogHero title={`Recent Engineerings`} />
      <NewProjects />
      {/* <Showcase /> */}
      <WhatWeBuild />
    </div>
  );
};

export default OurProjectsPage;
