import { Link } from 'react-router-dom';
import { GiFilmStrip } from 'react-icons/gi';

const NavBar = () => {
    
    return (
      <nav className="nav-bar">
          <ul>
              <li><GiFilmStrip /></li>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Ultimos_lanzamientos'}>Ultimos lanzamientos</Link></li>
              <li><Link to={'/Populares'}>Populares</Link></li>
              <li><Link to={'/Buscar'}>Buscar</Link></li>
          </ul>
      </nav>
    );
  }
  
  export default NavBar;
