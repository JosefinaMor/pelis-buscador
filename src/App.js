import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/Nav_bar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
