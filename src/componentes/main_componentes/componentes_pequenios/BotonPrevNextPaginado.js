import { useState, useEffect } from "react";
import { GrChapterPrevious, GrCaretPrevious, GrCaretNext, GrChapterNext } from 'react-icons/gr';


const BotonPrevNextPaginado = ({pagina, totalPaginas, onAction}) => {

  const [pagina, setPagina] = useState(pagina);
  const [totalPaginas, setTotalPaginas] = useState(totalPaginas);

  const handleClickFirstPage = (pagina) =>{
    if(pagina > 1){
      setPagina(1);
    }
  }
  
  const handleClickPrev = (pagina) =>{
    if(pagina > 1){
      setPagina(pagina - 1);
    }
  }

  const handleClickNext = (totalPaginas, pagina) =>{
    if(pagina < totalPaginas){
      setPagina(pagina + 1);
      setpaginaParams({pagina: pagina + 1});
    }
  }

  const handleClickLastPage = (totalPaginas,pagina) =>{
    if(pagina < totalPaginas){
      setPagina(totalPaginas);
    }
  }

  
  return (
    <div className="prev-next-buttons">
      <button onClick={() => handleClickFirstPage(pagina)} 
            id="prev-page-button"  
            aria-label="previous page"
            ><GrChapterPrevious /></button>
      <button onClick={() => handleClickPrev(pagina)} 
            id="prev-page-button"  
            aria-label="previous page"
            ><GrCaretPrevious /></button>
      <button onClick={() => handleClickNext(totalPaginas, pagina)} 
            id="next-page-button" 
            aria-label="next page"
            ><GrCaretNext /></button>
      <button onClick={() => handleClickLastPage(totalPaginas, pagina)} 
            id="next-page-button" 
            aria-label="next page"
            ><GrChapterNext /></button>
            {paginaParams}
    </div>
  );
}
  
  export default BotonPrevNextPaginado;