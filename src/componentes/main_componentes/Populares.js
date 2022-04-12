import { useState, useEffect } from "react";
import { GrChapterPrevious, GrCaretPrevious, GrCaretNext, GrChapterNext } from 'react-icons/gr';
import Cards from "./componentes_pequenios/Cards";


const Populares = () => {
 // const [arrayPelisPopulares, setArrayPelisPopulares] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

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
    }
  }

  const handleClickLastPage = (totalPaginas,pagina) =>{
    if(pagina < totalPaginas){
      setPagina(totalPaginas);
    }
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&language=es-ES&page=${pagina}`)
      .then(res => res.json())
      .then((cardData)=>{
        setTotalPaginas(cardData.total_pages);
      })
  }, []);

  
  return (
    <div className="page">
      <h1>Populares</h1>
      <Cards categoria={"top_rated"}
             pagina={pagina}/>
      <div className="prev-next-buttons">
        <button onClick={() => handleClickFirstPage(pagina)} 
                id="prev-page-button"  
                aria-label="previous page"><GrChapterPrevious /></button>
        <button onClick={() => handleClickPrev(pagina)} 
                id="prev-page-button"  
                aria-label="previous page"><GrCaretPrevious /></button>
        <button onClick={() => handleClickNext(totalPaginas, pagina)} 
                id="next-page-button" 
                aria-label="next page"><GrCaretNext /></button>
        <button onClick={() => handleClickLastPage(totalPaginas, pagina)} 
                id="next-page-button" 
                aria-label="next page"><GrChapterNext /></button>
      </div>
    </div>
  );
}
  
  export default Populares;