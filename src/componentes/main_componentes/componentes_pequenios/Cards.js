import { useEffect, useState } from "react";


const Cards = ({ query, categoria, pagina, paginaQuery, busqueda }) =>{
    const [arrayPelis, setArrayPelis] = useState([]);
    const [totalPaginas, setTotalPaginas] = useState(1);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${categoria}?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&language=es-ES&page=${pagina}`)
          .then(res => res.json())
          .then((cardData)=>{
            setArrayPelis(cardData.results);
          })
    }, [categoria, pagina]);

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&query=${query}&page=${paginaQuery}`)
        .then(res => res.json())
        .then((cardData)=>{
          console.log(cardData.results)
          setArrayPelis(cardData.results);
          console.log("hola",arrayPelis)
          setTotalPaginas(cardData.total_pages);
        })
    }, [query, paginaQuery]);

    return(
        <div className="container">
          {arrayPelis.map((pelicula) =>(
            <div className="card">
              <img src={`http://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} alt={pelicula.title} />
              <div>
                <h2>{pelicula.title}</h2>
              </div>
            </div>
          ))}
        </div>
    )
}

export default Cards;