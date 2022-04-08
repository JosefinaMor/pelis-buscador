import { useState, useEffect } from "react";
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';


const Populares = () => {
  const [arrayPelisPopulares, setArrayPelisPopulares] = useState([]);
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

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&language=es-ES&page=${pagina}`)
      .then(res => res.json())
      .then((cardData)=>{
        setArrayPelisPopulares(cardData.results);
        setTotalPaginas(cardData.total_pages);
      })
  }, [pagina]);

  
  return (
    <div className="page">
      <h1>Populares</h1>
      <div className="container">
        {arrayPelisPopulares.map((pelicula) =>(
        <div className="card">
          <img src="http://placekitten.com/200/300" alt={pelicula.title} />
          <div>
            <h2>{pelicula.title}</h2>
          </div>
        </div>
        ))}
        
      </div>
      <div className="prev-next-buttons">
        <button onClick={() => handleClickPrev(pagina)} 
                id="prev-page-button"  
                aria-label="previous page"><GrCaretPrevious /></button>
        <button onClick={() => handleClickNext(totalPaginas, pagina)} 
                id="next-page-button" 
                aria-label="next page"><GrCaretNext /></button>
      </div>
    </div>
  );
}
  
  export default Populares;