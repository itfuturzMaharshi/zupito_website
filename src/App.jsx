import "./App.css";
import PromotionalBanner from "./components/promotionalBanner/PromotionalBanner";
import Header from "./components/header/Header";
import HomePage from "./components/homePage";
import EmailFinderPage from "./components/emailFinderPage";

function App() {
  return (
    <>
      <PromotionalBanner />
      <Header />
      {/* <HomePage /> */}
      <EmailFinderPage />
    </>
  );
}

export default App;
