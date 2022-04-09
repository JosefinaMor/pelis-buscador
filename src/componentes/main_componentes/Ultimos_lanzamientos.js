import { useState, useEffect } from "react";
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';


const UltimosLanzamientos = () => {

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

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&language=es-ES&page=${pagina}`)
        .then(res => res.json())
        .then((cardData)=>{
          setTotalPaginas(cardData.total_pages);
          setArrayUltimosLanzamientos(cardData.results);
          console.log(cardData.results)
        })
    }, [pagina]);
  
    return (
      <div className="page">
        <h1>Ultimos lanzamientos</h1>
        <div className="container">
          {arrayUltimosLanzamientos.map((pelicula) =>(
          <div className="card">
            <img src={`http://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} alt={pelicula.title} />
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
  
  export default UltimosLanzamientos;