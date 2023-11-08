import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Inicio />} path="/"></Route>
        <Route element={<Contacto />} path="/contacto"></Route>
        <Route element={<Nosotros />} path="/nosotros"></Route>
        <Route element={<Blog />} path="/blog"></Route>
      </Routes>
      <Footer />
    </>
  );
};
export default App;
