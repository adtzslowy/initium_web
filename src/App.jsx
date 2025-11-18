import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Fitur from "./pages/Fitur";
import Issue from "./pages/Issue";
import Kontak from "./pages/Kontak";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-40">
        <Hero />
      </div>

      <div className="pt-24"> {/* supaya konten tidak ketutup navbar */}
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/issue" element={<Issue />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
