import { Link } from 'react-router-dom';
import { GiFilmStrip } from 'react-icons/gi';

const NavBar = () => {
    
    return (
      <nav className="nav-bar">
          <ul>
              <li><GiFilmStrip /></li>
              <li><Link className={'link'} to={'/'}>Home</Link></li>
              <li><Link className={'link'} to={'/Ultimos_lanzamientos'}>Ultimos lanzamientos</Link></li>
              <li><Link className={'link'} to={'/Populares'}>Populares</Link></li>
              <li><Link className={'link'} to={'/Buscar'}>Buscar</Link></li>
          </ul>
      </nav>
    );
  }
  
  export default NavBar;
