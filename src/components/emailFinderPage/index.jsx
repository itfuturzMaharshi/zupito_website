import React from "react";
import FindTheRightConnections from "./FindTheRightConnections";
import FinderWorks from "./FinderWorks";
import FAQsPage from "./FAQsPage";
import EmailFinder from "./EmailFinder";
import HeroSection from "./HeroSection";
import VerifiedEmail from "./VerifiedEmail";
import BulkEmailFinder from "./BulkEmailFinder";
import Footer from "./Footer";

const EmailFinderPage = () => {
  return (
    <div>
      <HeroSection />
      <EmailFinder />
      <FindTheRightConnections />
      <FinderWorks />
      <BulkEmailFinder />
      <VerifiedEmail />
      <FAQsPage />
      <Footer />
    </div>
  );
};

export default EmailFinderPage;
