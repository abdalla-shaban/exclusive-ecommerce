import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <TopHeader />
      <Navbar />
      <div className="flex-1"></div>
      <Footer />
    </main>
  );
}

export default App;
