import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tentang from "./components/Tentang";
import Fitur from "./components/Fitur";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <main className="pt-40">
        <Hero />
        <Tentang/>
        <Fitur/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
