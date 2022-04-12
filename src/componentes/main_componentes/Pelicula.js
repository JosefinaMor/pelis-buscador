
const Pelicula = ({ movie_id }) =>{

    /*useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=4e1ae359e8d00fd3c5fa0742e3a2be5f&language=es-ES`)
        .then(res => res.json())
        .then((cardData)=>{
            console.log(cardData.results)
        })
    }, [query, pagina]);*/

    return(
        <div className="main-pelicula">
            <div className="container-peli">
                <section className="foto">
                    <img src="https://placekitten.com/200/300" alt="" />
                </section>

                <section class="info-general">
                    <div className="titulo">
                        <h2>Sonic 2: La Película</h2>
                        <button>ver trailer</button>
                    </div>
                    <div>
                        <h3>general</h3>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At eaque culpa atque ad suscipit maxime dolorem delectus nisi aspernatur labore et mollitia, amet sunt voluptas odit, in laudantium repudiandae itaque!
                        </p>
                    </div>
                    <div>
                        <h3>general</h3>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At eaque culpa atque ad suscipit maxime dolorem delectus nisi aspernatur labore et mollitia, amet sunt voluptas odit, in laudantium repudiandae itaque!
                        </p>
                    </div>
                </section>
            </div>
    </div>
    );
}

export default Pelicula;