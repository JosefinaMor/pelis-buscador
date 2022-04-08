import { useState, useEffect } from "react";

const UltimosLanzamientos = () => {

    const [arrayUltimosLanzamientos, setArrayUltimosLanzamientos] = useState([]);
    useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/latest?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&language=es-ES&page=1')
        .then(res => res.json())
        .then((cardData)=>{
          console.log(cardData.results);
          setArrayUltimosLanzamientos(cardData.results);
        })
    }, []);
  
    return (
      <div className="page">
        <h1>Populares</h1>
        <div className="container">
          {arrayUltimosLanzamientos.map((pelicula) =>(
          <div className="card">
            <img src="http://placekitten.com/200/300" alt={pelicula.title} />
            <div>
              <h1>{pelicula.title}</h1>
            </div>
          </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default UltimosLanzamientos;