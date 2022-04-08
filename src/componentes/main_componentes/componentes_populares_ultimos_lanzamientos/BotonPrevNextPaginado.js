import { useState, useEffect } from "react";
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';


const BotonPrevNextPaginado = (pagina) => {

    const [arrayUltimosLanzamientos, setArrayUltimosLanzamientos] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);

    const handleClickPrev = (pagina) =>{
      if(pagina > 1){
        setPagina(pagina - 1);
      }
      console.log(pagina)

    }

    const handleClickNext = (totalPaginas, pagina) =>{
      if(pagina < totalPaginas){
        setPagina(pagina + 1);
      }
    }
  
    return (
        <div className="prev-next-buttons">
          <button onClick={() => handleClickPrev(pagina)} aria-label="previous page"><GrCaretPrevious /></button>
          <button onClick={() => handleClickNext(totalPaginas, pagina)} aria-label="next page"><GrCaretNext /></button>
        </div>
    );
  }
  
  export default BotonPrevNextPaginado;