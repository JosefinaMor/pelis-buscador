import { useState, useEffect } from "react";
import Cards from "./componentes_pequenios/Cards";
import { GrChapterPrevious, GrCaretPrevious, GrCaretNext, GrChapterNext } from 'react-icons/gr';


const UltimosLanzamientos = () => {

  const [arrayUltimosLanzamientos, setArrayUltimosLanzamientos] = useState([]);
  const [paginaQuery] = useState(1);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  const handleClickPrev = (pagina) =>{
    if(pagina > 1){
      setPagina(pagina - 1);
    }
  }

  const handleClickNext = (totalPaginas, pagina) =>{
    if(pagina < totalPaginas){
      setPagina(pagina + 1);
    }
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&language=es-ES&page=${pagina}`)
      .then(res => res.json())
      .then((cardData)=>{
        setTotalPaginas(cardData.total_pages);
        setArrayUltimosLanzamientos(cardData.results);
    })
  }, [pagina]);
  
  return (
    <div className="page">
      <h1>Ultimos lanzamientos</h1>
      <Cards 
        query={"Undefined"}
        categoria={"upcoming"}
        pagina={pagina}
        paginaQuery={paginaQuery}
        busqueda={false}
        />
      <div className="prev-next-buttons">
        <button onClick={() => handleClickPrev(pagina)} 
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
        <button onClick={() => handleClickNext(totalPaginas, pagina)} 
                id="next-page-button" 
                aria-label="next page"
                ><GrChapterNext /></button>
      </div>
    </div>
  );
}
  
  export default UltimosLanzamientos;