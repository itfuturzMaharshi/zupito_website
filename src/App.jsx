import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PromotionalBanner from "./components/promotionalBanner/PromotionalBanner";
// import Header from "./components/header/Header";
// import HomePage from "./components/homePage";
// import EmailFinderPage from "./components/emailFinderPage";
// import EmailVerifierPage from "./components/emailVerifierPage";
// import HelpDeskPage from "./components/helpdeskPage";
// import UseCasesPage from "./components/useCasesPage";
// import DealsPage from "./components/dealsPage";
// import PricingPage from "./components/pricingPage";
import Banner from "./components/dummy-1/Banner";
import DummyHeader from "./components/dummy-1/DummyHeader";
import DummyHero from "./components/dummy-1/DummyHero";
import DummyAction from "./components/dummy-1/DummyAction";
import Banner2 from "./components/dummy-2/Banner2";
import Dummy2Header from "./components/dummy-2/Dummy2Header";
import Dummy2Hero from "./components/dummy-2/Dummy2Hero";
import Banner3 from "./components/dummy-3/Banner3";
import Dummy3Header from "./components/dummy-3/Dummy3Header";
import Dummy3Hero from "./components/dummy-3/Dummy3Hero";
import { useZoomLevel } from "./hooks/useZoomLevel";

function App() {
  // Detect zoom level and apply CSS classes for layout fixes
  useZoomLevel();

  return (
    // <Router>
    //   <PromotionalBanner />
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={
    //       <>
    //         <HomePage />
    //       </>
    //     } />
    //     <Route path="/use-cases" element={<UseCasesPage />} />
    //     <Route path="/email-finder" element={<EmailFinderPage />} />
    //     <Route path="/email-verifier" element={<EmailVerifierPage />} />
    //     <Route path="/help-desk" element={<HelpDeskPage />} />
    //     <Route path="/deals" element={<DealsPage />} />
    //     <Route path="/pricing" element={<PricingPage />} />
    //   </Routes>
    // </Router>

    <>
      {/* <Banner />
      <DummyHeader />
      <DummyHero />
      <DummyAction />  */}

      <Banner2 />
      <Dummy2Header />
      <Dummy2Hero />

      {/* <Banner3 />
      <Dummy3Header />
      <Dummy3Hero /> */}
    </>
  );
}

export default App;
