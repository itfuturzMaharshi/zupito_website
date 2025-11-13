import "./App.css";
import PromotionalBanner from "./components/promotionalBanner/PromotionalBanner";
import Header from "./components/header/Header";
import HomePage from "./components/homePage";
import EmailFinderPage from "./components/emailFinderPage";
import EmailVerifierPage from "./components/emailVerifierPage";
import HelpDeskPage from "./components/helpdeskPage";
import UseCasesPage from "./components/useCasesPage";

function App() {
  return (
    <>
      <PromotionalBanner />
      <Header />
      {/* <HomePage /> */}
      {/* <EmailFinderPage /> */}
      {/* <EmailVerifierPage /> */}
      {/* <HelpDeskPage /> */}
      <UseCasesPage />
    </>
  );
}

export default App;
