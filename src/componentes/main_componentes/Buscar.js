import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Cards from "./componentes_pequenios/Cards";
import { GrChapterPrevious, GrCaretPrevious, GrCaretNext, GrChapterNext } from 'react-icons/gr';



const Buscar = () => {

  const [mostrarCards, setMostrarCards] = useState(false);
  const [query, setQuery] = useState("Undefined");
  const [paginaQuery, setPaginaQuery] = useState(1);
  const [valorInput, setValorInput] = useState("");
    
  const handleBlur = (e) =>{
    setValorInput(e.target.value);
  }

  const handleClick = () =>{
    setQuery(valorInput);
    setMostrarCards(true);
  }

  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  const handleClickPrev = (pagina) =>{
    if(pagina > 1){
      setPaginaQuery(pagina - 1);
    }
    console.log(pagina)

  }

  const handleClickNext = (totalPaginas, pagina) =>{
    if(pagina < totalPaginas){
      setPaginaQuery(pagina + 1);
    }
  }

    return (
      <div className="search-section">
        <div className="buscador">
          <input type="text" onBlur={handleBlur}/>
          <button onClick={handleClick} 
                  aria-label="search button"
                  ><BiSearchAlt /></button>
        </div>
        {mostrarCards && 
        <Cards 
          query={query}
          categoria={"Undefined"}
          pagina={pagina}
          paginaQuery={paginaQuery}
          busqueda={true}
        />}
        <div className="prev-next-buttons">
        <button onClick={() => handleClickPrev(pagina)} 
                id="prev-page-button"  
                aria-label="previous page"><GrChapterPrevious /></button>
        <button onClick={() => handleClickPrev(pagina)} 
                id="prev-page-button"  
                aria-label="previous page"><GrCaretPrevious /></button>
        <button onClick={() => handleClickNext(totalPaginas, pagina)} 
                id="next-page-button" 
                aria-label="next page"><GrCaretNext /></button>
        <button onClick={() => handleClickNext(totalPaginas, pagina)} 
                id="next-page-button" 
                aria-label="next page"><GrChapterNext /></button>
      </div>
      </div>
    );
  }
  
  export default Buscar;