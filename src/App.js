import { BrowserRouter, Routes } from 'react-router-dom';
import NavBar from './componentes/Nav_bar';
import Main from './componentes/Main';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
          <Main></Main>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
