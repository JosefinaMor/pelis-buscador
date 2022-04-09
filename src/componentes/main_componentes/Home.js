import Sugerencia_pelis from "./componente_home/Sugerencia_pelis";

const Home = () => {

    return (
      <div className="container-sugerencias">
        <div className="container-listas">
          <Sugerencia_pelis tipoPeli={"top_rated"} 
                            titulo={"Populares"}/>
        </div>
        <div className="container-listas">
          <Sugerencia_pelis tipoPeli={"upcoming"}
                            titulo={"Ultimos lanzamientos"}/>
        </div>
      </div>
    );
  }
  
  export default Home;