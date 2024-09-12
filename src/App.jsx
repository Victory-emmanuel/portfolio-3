import { NavBar, Footer } from "./components/components";
import { HomePage, About, Portfolio, Services, Contact } from "./pages/pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
function App() {
  return (
    <>
      <BrowserRouter>
        <motion.div className="md:bg-white xx:bg-primary">
          <NavBar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </motion.div>
      </BrowserRouter>
    </>
  );
}

export default App;
