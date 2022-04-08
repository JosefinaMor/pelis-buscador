import { useEffect, useState } from "react";
import { BiShow } from "react-icons/bi";

const Home = () => {
  const [arrayUltimosLanzamientos, setArrayUltimosLanzamientos] = useState([]);
  const [pagina, setPagina] = useState(1);


  const [arrayPelisPopulares, setArrayPelisPopulares] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&language=es-ES&page=1')
      .then(res => res.json())
      .then((cardData)=>{
        setArrayPelisPopulares(cardData.results);
      })
  }, []);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&language=es-ES&page=${pagina}`)
      .then(res => res.json())
      .then((cardData)=>{
        setArrayUltimosLanzamientos(cardData.results);
        console.log(cardData.results)
      })
  }, [pagina]);


    return (
      <div>
        <div className="container-ult-lanzamiento">      
          {arrayUltimosLanzamientos.map((pelicula) =>(
          <div className="card">
            <div>
              <h2>{pelicula.title}</h2>
              <BiShow />
            </div>
          </div>
          ))}
        </div>
        <div className="container-popular">
          {arrayPelisPopulares.map((pelicula, index) =>(
          <div className="card">
            <div>
              <h2>{pelicula.title}</h2>
            </div>
          </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Home;