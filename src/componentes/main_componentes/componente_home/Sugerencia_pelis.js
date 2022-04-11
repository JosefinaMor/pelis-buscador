import { useState, useEffect } from "react";
import { BiShow } from "react-icons/bi";
import { Link } from 'react-router-dom';



const Sugerencia_pelis = ({ tipoPeli, titulo }) => {

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
          <h2>{titulo}</h2>     
            {arrayPelis.map((pelicula) =>(
                <Link to={'/Pelicula'}>
                  <li className="card">                  
                    <h3>{pelicula.title}</h3>
                    <BiShow />
                  </li>
                </Link>
            ))}
        </ul>
    );
  }
  
  export default Sugerencia_pelis;