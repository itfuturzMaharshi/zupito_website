import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PromotionalBanner from "./components/promotionalBanner/PromotionalBanner";
import Header from "./components/header/Header";
import HomePage from "./components/homePage";
import EmailFinderPage from "./components/emailFinderPage";
import EmailVerifierPage from "./components/emailVerifierPage";
import HelpDeskPage from "./components/helpdeskPage";
import UseCasesPage from "./components/useCasesPage";
import DealsPage from "./components/dealsPage";
import PricingPage from "./components/pricingPage";

function App() {
  return (
    <Router>
      <PromotionalBanner />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
          </>
        } />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/email-finder" element={<EmailFinderPage />} />
        <Route path="/email-verifier" element={<EmailVerifierPage />} />
        <Route path="/help-desk" element={<HelpDeskPage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
