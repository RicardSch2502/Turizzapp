import logo from './logo.svg';
import Secciones from './Componentes/Secciones';
import Iconos from './Componentes/Iconos';
import Rutas from './Servicios.js/Rutas';
import { BrowserRouter, Link } from 'react-router-dom';



import './App.css';


function App() {


  
  return (
   <BrowserRouter>
    <div className="App">
    
      <Rutas/>
      
    </div>
    </BrowserRouter>
  
    
  );
}

export default App;
