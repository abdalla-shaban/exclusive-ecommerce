import Footer from "./components/Footer";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar";
import TodayDeals from "./components/TodayDeals.jsx";
import TopHeader from "./components/TopHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Categories from "./components/Categories.jsx";
import BestSelling from "./components/BestSelling.jsx";
import CatAd from "./components/CatAd.jsx";
import ExploreProducts from "./components/ExploreProducts.jsx";
import Collections from "./components/Collections.jsx";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <TopHeader />
      <Navbar />
      <div className="flex-1">
        <Hero />
        <TodayDeals />
        <Categories />
        <BestSelling />
        <CatAd />
        <ExploreProducts />
        <Collections />
      </div>
      <Footer />
    </main>
  );
}

export default App;
