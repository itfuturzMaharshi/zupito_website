import "./App.css";
import PromotionalBanner from "./components/promotionalBanner/PromotionalBanner";
import Header from "./components/header/Header";
import HomePage from "./components/homePage";

function App() {
  return (
    <>
      <PromotionalBanner />
      <Header />
      <HomePage />
    </>
  );
}

export default App;
