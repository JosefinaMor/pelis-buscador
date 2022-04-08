import { Routes, Route } from 'react-router-dom';
import Home from "./main_componentes/Home";
import UltimosLanzamientos from "./main_componentes/Ultimos_lanzamientos";
import Populares from "./main_componentes/Populares";
import Buscar from "./main_componentes/Buscar";

const Main = () => {
    
    return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ultimos_lanzamientos" element={<UltimosLanzamientos />} />
          <Route path="/Populares" element={<Populares />} />
          <Route path="/Buscar" element={<Buscar />} />
      </Routes>
    );
  }
  
  export default Main;