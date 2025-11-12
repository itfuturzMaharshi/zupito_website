import "./App.css";
import PromotionalBanner from "./components/promotionalBanner/PromotionalBanner";
import Header from "./components/header/Header";
import HomePage from "./components/homePage";
import EmailFinderPage from "./components/emailFinderPage";
import EmailVerifierPage from "./components/emailVerifierPage";
import HelpDeskPage from "./components/helpdeskPage";

function App() {
  return (
    <>
      <PromotionalBanner />
      <Header />
      {/* <HomePage /> */}
      {/* <EmailFinderPage /> */}
      {/* <EmailVerifierPage /> */}
      <HelpDeskPage />
    </>
  );
}

export default App;
