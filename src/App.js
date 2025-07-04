import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import CVDownload from "./pages/CvDownload";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/portfolio" element={<Portfolio />} />{" "}
        <Route path="/CVDownload" element={<CVDownload />} />{" "}
      </Routes>{" "}
      <Footer />
    </Router>
  );
}

export default App;
