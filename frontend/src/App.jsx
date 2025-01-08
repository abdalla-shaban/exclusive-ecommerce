import Footer from "./components/Footer";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";
function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <TopHeader />
      <Navbar />
      <div className="flex-1">
        <Hero />
      </div>
      <Footer />
    </main>
  );
}

export default App;
