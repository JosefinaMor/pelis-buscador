import { useState, useEffect } from "react";
import { GrChapterPrevious, GrCaretPrevious, GrCaretNext, GrChapterNext } from 'react-icons/gr';


const BotonPrevNextPaginado = ({ pagina1, totalPaginas1, onAction }) => {

  const [pagina, setPagina] = useState(pagina1);
  const [totalPaginas] = useState(totalPaginas1);

  const handleClickFirstPage = (pagina1) =>{
    if(pagina > 1){
      setPagina(1);
    }
    console.log("boton", pagina)
    return pagina;
  }
  
  const handleClickPrev = (pagina) =>{
    if(pagina > 1){
      setPagina(pagina - 1);
      console.log("boton", pagina)
    }
    console.log("boton1", pagina)
    return pagina;
  }

  const handleClickNext = (totalPaginas, pagina) =>{
    if(pagina < totalPaginas){
      setPagina(pagina + 1);
    }
    return pagina;
  }

  const handleClickLastPage = (totalPaginas,pagina) =>{
    if(pagina < totalPaginas){
      setPagina(totalPaginas);
    }
    return pagina;
  }

  
  return (
    <div className="prev-next-buttons">
      <button onClick={() => {
          onAction(handleClickFirstPage(pagina1));
        }} 
            id="prev-page-button"  
            aria-label="previous page"
            ><GrChapterPrevious /></button>
      <button onClick={() => {
          onAction(handleClickPrev(pagina1));
        }} 
            id="prev-page-button"  
            aria-label="previous page"
            ><GrCaretPrevious /></button>
      <button onClick={() => {
          onAction(handleClickNext(totalPaginas1, pagina1));
        }}  
            id="next-page-button" 
            aria-label="next page"
            ><GrCaretNext /></button>
      <button onClick={() => {
          onAction(handleClickLastPage(totalPaginas1, pagina1));
        }} 
            id="next-page-button" 
            aria-label="next page"
            ><GrChapterNext /></button>
    </div>
  );
}
  
  export default BotonPrevNextPaginado;