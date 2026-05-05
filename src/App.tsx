import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import AboutUsPage from "./Pages/AboutUsPage";
import OurProjectsPage from "./Pages/OurProjectsPage";
import OurTeamPage from "./Pages/OurTeamPage";
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

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/projects" element={<OurProjectsPage />} />
        <Route path="/how-we-work" element={<HowWeWorkPage />} />
        <Route path="/team" element={<OurTeamPage />} />
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
