import { Routes, Route } from 'react-router-dom';
import Home from "./main_componentes/Home";
import UltimosLanzamientos from "./main_componentes/Ultimos_lanzamientos";
import Populares from "./main_componentes/Populares";
import Buscar from "./main_componentes/Buscar";
import Pelicula from './main_componentes/Pelicula';

const Main = () => {
    
    return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ultimos_lanzamientos" element={<UltimosLanzamientos />} />
          <Route path="/Populares" element={<Populares />} />
          <Route path="/Buscar" element={<Buscar />} />
          <Route path="/Pelicula" element={<Pelicula />} />
      </Routes>
    );
  }
  
  export default Main;