import { useState, useEffect } from "react";
import { GrChapterPrevious, GrCaretPrevious, GrCaretNext, GrChapterNext } from 'react-icons/gr';


const BotonPrevNextPaginado = ({ pagina1, totalPaginas1, onAction }) => {

  const [pagina, setPagina] = useState(pagina1);
  const [totalPaginas, setTotalPaginas] = useState(totalPaginas1);

  const handleClickFirstPage = (pagina) =>{
    if(pagina > 1){
      setPagina(1);
    }
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
  }

  
  return (
    <div className="prev-next-buttons">
      {console.log(pagina, pagina, totalPaginas)}
      <button onClick={() => {
          handleClickFirstPage(pagina);
          console.log(pagina)
          onAction(pagina);
        }} 
            id="prev-page-button"  
            aria-label="previous page"
            ><GrChapterPrevious /></button>
      <button onClick={() => {
          onAction(handleClickPrev(pagina));
        }} 
            id="prev-page-button"  
            aria-label="previous page"
            ><GrCaretPrevious /></button>
      <button onClick={() => {
          onAction(handleClickNext(totalPaginas, pagina));
        }}  
            id="next-page-button" 
            aria-label="next page"
            ><GrCaretNext /></button>
      <button onClick={() => {
          onAction(handleClickLastPage(totalPaginas, pagina));
        }} 
            id="next-page-button" 
            aria-label="next page"
            ><GrChapterNext /></button>
    </div>
  );
}
  
  export default BotonPrevNextPaginado;