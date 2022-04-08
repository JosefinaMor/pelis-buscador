import { useState, useEffect } from "react";
import { BiShow } from "react-icons/bi";



const Sugerencia_pelis = ({ tipoPeli }) => {

    const [arrayPelis, setArrayPelis] = useState([]);
    
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${tipoPeli}?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&language=es-ES&page=1`)
        .then(res => res.json())
        .then((cardData)=>{
          console.log(cardData.results)
          setArrayPelis(cardData.results);
        })
    }, []);
  
    return (
        <ul>      
            {arrayPelis.map((pelicula) =>(
                <li className="card">
                    <h2>{pelicula.title}</h2>
                    <BiShow />
                </li>
            ))}
        </ul>
    );
  }
  
  export default Sugerencia_pelis;