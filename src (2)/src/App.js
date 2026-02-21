// App.js
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Main Pages
import Home from "./pages/Home";
import Internship from "./pages/Internship";
import InternshipContent from "./pages/InternshipContent";
import Blog from "./pages/Blog";
import Career from "./pages/Career";

// Portfolio
import ESalary from "./pages/Portfolio/Esalary";
import PatTantra from "./pages/Portfolio/PatTantra";
import Ecare360 from "./pages/Portfolio/Ecare360";
import Scroller from "./pages/Portfolio/Scroller";
import Dhaara from "./pages/Portfolio/Dhaara";
import ExpertGuruji from "./pages/Portfolio/ExpertGuruji";
import ConstructIQ from "./pages/Portfolio/ConstructIQ";
import DigitalSchool from "./pages/Portfolio/DigitalSchool";
import KamDhanda from "./pages/Portfolio/KamDhanda";
import ExpertSkill from "./pages/Portfolio/ExpertSkill";
import Marketing from "./pages/Portfolio/Marketing";
import Matrimonial from "./pages/Portfolio/Matrimonial";

// Leadership
import Ceo from "./pages/Leadership/Ceo";
import CeoMadam from "./pages/Leadership/CeoMadam";

// Job Details
import WebDeveloper from "./pages/JobDetails/WebDeveloper";
import AndroidDeveloper from "./pages/JobDetails/AndroidDeveloper";
import DigitalMarket from "./pages/JobDetails/Digitalmarket";
import UiDesigner from "./pages/JobDetails/Ui";
import SoftwareEngineer from "./pages/JobDetails/Software";

// Job Application Form
import JobApplicationForm from "./pages/JobDetails/JobApplicationForm";

// Blog Pages (✔ FIXED PATHS)
// Blog Pages (✔ FIXED PATHS + UNIQUE NAMES)
import Esalary from "./pages/Blog/Esalary";
import Expertguruji from "./pages/Blog/Expertguruji";
import Dhaara1 from "./pages/Blog/Dhaara1";
import ExpertSkill1 from "./pages/Blog/ExpertSkilll";
import Kamdhanda from "./pages/Blog/Kamdhanda";
import DigitalSchool1 from "./pages/Blog/DigitalSchool1";
import ScrollerBlog from "./pages/Blog/Scroller";   // ✔ renamed
import PatTantraBlog from "./pages/Blog/PatTantra "; // ✔ renamed
import Ecare1 from "./pages/Blog/Ecare1";            // ✔ renamed



import Terms from "./pages/terms";
import Shipping from "./pages/shipping";
import Privacy from "./pages/privacy";
import Refund from "./pages/refund";



function Layout() {
  const location = useLocation();

  // Hide navbar + footer ONLY on job application form page
  const hideLayout = location.pathname === "/job-application-form";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home />
            </>
          }
        />

        {/* Portfolio Pages */}
        <Route path="/portfolio/e-salary" element={<ESalary />} />
        <Route path="/portfolio/pattantra" element={<PatTantra />} />
        <Route path="/portfolio/ecare360" element={<Ecare360 />} />
        <Route path="/portfolio/scroller" element={<Scroller />} />
        <Route path="/portfolio/dhaara" element={<Dhaara />} />
        <Route path="/portfolio/expert-guruji" element={<ExpertGuruji />} />
        <Route path="/portfolio/constructiq" element={<ConstructIQ />} />
        <Route path="/portfolio/digital-school" element={<DigitalSchool />} />
        <Route path="/portfolio/kamdhanda" element={<KamDhanda />} />
        <Route path="/portfolio/expert-skill" element={<ExpertSkill />} />
        <Route path="/portfolio/marketing-pro" element={<Marketing />} />
        <Route path="/portfolio/matrimonial" element={<Matrimonial />} />

        {/* Blog pages ✔ FIXED */}
        <Route path="/blog/e-salary" element={<Esalary />} />
        <Route path="/blog/guruji" element={<Expertguruji />} />
        <Route path="/blog/dharaa" element={<Dhaara1 />} />
        <Route path="/blog/expert-skill" element={<ExpertSkill1 />} />
        <Route path="/blog/kamdhanda" element={<Kamdhanda />} />
        <Route path="/blog/digital-school" element={<DigitalSchool1 />} />


        
        <Route path="/blog/scroller-app" element={<ScrollerBlog />} />
<Route path="/blog/ecare360" element={<Ecare1 />} />
<Route path="/blog/pattantra" element={<PatTantraBlog />} />

        {/* Leadership */}
        <Route path="/leader/shriram" element={<Ceo />} />
        <Route path="/leader/netra" element={<CeoMadam />} />

        {/* Internship & Career */}
        <Route path="/internship" element={<Internship />} />
        <Route path="/internship-content" element={<InternshipContent />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />


        <Route path="/terms" element={<Terms />} />
<Route path="/shipping" element={<Shipping />} />
<Route path="/privacy" element={<Privacy />} />
<Route path="/refund" element={<Refund />} />


        {/* Job Detail Pages */}
        <Route path="/JobDetails/web-developer" element={<WebDeveloper />} />
        <Route path="/JobDetails/android-developer" element={<AndroidDeveloper />} />
        <Route path="/JobDetails/digital-marketing" element={<DigitalMarket />} />
        <Route path="/JobDetails/uiux-designer" element={<UiDesigner />} />
        <Route path="/JobDetails/senior-software-engineer" element={<SoftwareEngineer />} />

        {/* Job Application Form (NO NAVBAR & NO FOOTER) */}
        <Route path="/job-application-form" element={<JobApplicationForm />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
