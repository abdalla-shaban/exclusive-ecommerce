import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <TopHeader />
      <div className="flex-1"></div>
      <Footer />
    </main>
  );
}

export default App;
