import { BiSearchAlt } from "react-icons/bi";

const Buscar = () => {
    
    return (
        <div class="search-section">
          <input type="text" value="search by film´s name" id="search-input" />
          <button id="search-button" aria-label="search button"><BiSearchAlt /></button>
        </div>
    );
  }
  
  export default Buscar;