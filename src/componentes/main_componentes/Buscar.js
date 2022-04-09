import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';


const Buscar = () => {

    const [mostrarCards, setMostrarCards] = useState(false);
    const [query, setQuery] = useState("cinderella");
    const [valorInput, setValorInput] = useState("");
    const [arrayBusquedaPelis, setArrayBusquedaPelis] = useState([]);
    
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
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&query=${query}&page=${pagina}`)
        .then(res => res.json())
        .then((cardData)=>{
          console.log(cardData.results)
          setArrayBusquedaPelis(cardData.results);
          setTotalPaginas(cardData.total_pages);
        })
    }, [query, pagina]);

    return (
      <div className="search-section">
        <div className="buscador">
          <input type="text" onBlur={handleBlur}/>
          <button onClick={handleClick} 
                  aria-label="search button"><BiSearchAlt /></button>
        </div>
        {mostrarCards && 
        <div className="container">
          {arrayBusquedaPelis.map((pelicula) =>(
            <div className="card">
              <img src={`http://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} alt={pelicula.title} />
              <div>
                <h2>{pelicula.title}</h2>
              </div>
            </div>
          ))}
        </div>}
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
  
  export default Buscar;