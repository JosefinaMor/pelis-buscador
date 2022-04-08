import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

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

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&query=${query}`)
        .then(res => res.json())
        .then((cardData)=>{
          console.log(cardData.results)
          setArrayBusquedaPelis(cardData.results);
        })
    }, [query]);

    return (
      <div className="search-section">
        <div className="buscador">
          <input type="text" onBlur={handleBlur}/>
          <button onClick={handleClick} aria-label="search button"><BiSearchAlt /></button>
        </div>
        {mostrarCards && 
        <div className="container">
          {arrayBusquedaPelis.map((pelicula) =>(
            <div className="card">
              <img src="http://placekitten.com/200/300" alt={pelicula.title} />
              <div>
                <h2>{pelicula.title}</h2>
              </div>
            </div>
          ))}
        </div>}
      </div>
    );
  }
  
  export default Buscar;