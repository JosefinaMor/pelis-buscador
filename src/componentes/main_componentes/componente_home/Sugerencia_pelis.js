import { useState, useEffect } from "react";
import { BiShow } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { GrCaretDown, GrCaretUp } from 'react-icons/gr';




const Sugerencia_pelis = ({ tipoPeli, titulo }) => {

    const [arrayPelis, setArrayPelis] = useState([]);
    const [mostrarPeli, setMostrarPeli] = useState(true);

    const handleAbrirCerrarSugerenciasPelis = () =>{
      setMostrarPeli(mostrarPeli ? false : true);
      //nose como hacer para que se haga responsive esto, la idea es que cuando la pantalla sea menor a with:600px
      //aparezca la sugerencia de peliculas colapsado y usar esta funcion. 
      //¿Hay alguna manera de leer este tipo de evento (cambio de media query)? ¿o es con css?
    }
  
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
          <h2 onClick={handleAbrirCerrarSugerenciasPelis}><span>{titulo}</span> {mostrarPeli ? <GrCaretUp /> : <GrCaretDown />}</h2>     
            {mostrarPeli && arrayPelis.map((pelicula) =>(
                <Link className={'link'} to={'/Home/Pelicula'}>
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



