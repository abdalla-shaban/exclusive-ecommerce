import Footer from "./components/Footer";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar";
import TodayDeals from "./components/TodayDeals.jsx";
import TopHeader from "./components/TopHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Categories from "./components/Categories.jsx";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <TopHeader />
      <Navbar />
      <div className="flex-1">
        <Hero />
        <TodayDeals />
        <Categories />
      </div>
      <Footer />
    </main>
  );
}

export default App;
