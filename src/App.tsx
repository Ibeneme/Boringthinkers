import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import AboutUsPage from "./Pages/AboutUsPage";
import OurProjectsPage from "./Pages/OurProjectsPage";
import CareerPage from "./Pages/CareersPage";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import ProjectDetails from "./Components/NewProjects/ProjectDetails";
import "./assets/fonts/fonts.css";
import HowWeWorkPage from "./Pages/HowWeWorkPage";
import TermsOfService from "./Pages/PrivacyPolicy/Terms";
import SecurityPage from "./Pages/PrivacyPolicy/Security";
import StartProjectPage from "./Pages/StartProjectPage";
import BlogPage from "./Pages/BlogPage";
import BlogDetailsPage from "./Pages/BlogDetailPage";
import PricingPage from "./Pages/PricingPage";
import Team from "./Pages/Hero/Team";
import FAQPage from "./Components/Faqs/FAQPage";
import PageHero from "./Components/BlogHero/BlogHero";
import WhatWeBuild from "./Components/AccordionSection/Whatwebuild";
import FlagsRow from "./Pages/Hero/FlagsRow";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route
          path="/faq"
          element={
            <>
              <PageHero title="Frequently asked Questions" />
              <FAQPage />
              <WhatWeBuild />
            </>
          }
        />
        <Route path="/projects" element={<OurProjectsPage />} />
        <Route path="/how-we-work" element={<HowWeWorkPage />} />
        <Route
          path="/team"
          element={
            <>
              <PageHero title="Our Team" />
              <Team />
              <FlagsRow />
            </>
          }
        />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/start-a-project" element={<StartProjectPage />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/privacy-policy"
          element={
            <div style={{ backgroundColor: "#011404" }}>
              <PrivacyPolicy />
            </div>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <div style={{ backgroundColor: "#011404" }}>
              <TermsOfService />
            </div>
          }
        />
        <Route
          path="/security"
          element={
            <div style={{ backgroundColor: "#011404" }}>
              <SecurityPage />
            </div>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
