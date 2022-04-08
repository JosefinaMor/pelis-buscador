import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/Nav_bar';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
