import React from "react";
import FindTheRightConnections from "./FindTheRightConnections";
import FinderWorks from "./FinderWorks";
import FAQsPage from "./FAQsPage";
import EmailFinder from "./EmailFinder";
import HeroSection from "./HeroSection";
import VerifiedEmail from "./VerifiedEmail";
import BulkEmailFinder from "./BulkEmailFinder";

const EmailFinderPage = () => {
  return (
    <div>
      <HeroSection />
      <FindTheRightConnections />
      <FinderWorks />
      <FAQsPage />
      <EmailFinder />
      <VerifiedEmail />
      <BulkEmailFinder />
    </div>
  );
};

export default EmailFinderPage;
