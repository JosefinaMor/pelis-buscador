import { useState, useEffect } from "react";
import { GrChapterPrevious, GrCaretPrevious, GrCaretNext, GrChapterNext } from 'react-icons/gr';
import Cards from "./componentes_pequenios/Cards";
import BotonPrevNextPaginado from "./componentes_pequenios/BotonPrevNextPaginado";



const Populares = () => {
 // const [arrayPelisPopulares, setArrayPelisPopulares] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  const handleAccion = (e) =>{
    console.log(e);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&language=es-ES&page=${pagina}`)
      .then(res => res.json())
      .then((cardData)=>{
        setTotalPaginas(cardData.total_pages);
      })
  }, []);

  //https://zeroidentidad.gitbook.io/react-puro-19/3-props/comunicacion_componente_padre
  return (
    <div className="page">
      <h1>Populares</h1>
      <Cards 
      categoria={"top_rated"}
      pagina={pagina}/>
      <BotonPrevNextPaginado 
      pagina={pagina}
      totalPaginas={totalPaginas}
      onAction={() => handleAccion()}/>
    </div>
  );
}
  
  export default Populares;