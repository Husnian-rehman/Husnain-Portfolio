import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import CVDownload from "./pages/CvDownload";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import AOS from 'aos'; // ✅ Import AOS
import 'aos/dist/aos.css'; // ✅ Import AOS styles

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // global animation duration (optional)
      once: true, // animation only once (optional)
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/CVDownload" element={<CVDownload />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
