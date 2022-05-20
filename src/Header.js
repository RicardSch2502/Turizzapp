import React from 'react'
import Boton from './Componentes/Boton';
import qw from "./imagenes/qw.png"
import {Link} from 'react-router-dom';

function Header() {
  return (

  
    <header className="App-center ">
      
      <img src={qw} width={300} class=" mx-auto d-block animate__animated animate__bounceInUp"/>
      <h1 className='animate__animated animate__bounceInUp'><font color="white" >Bienvenidos a TurizzApp</font></h1> 
    
      <Link to="/menu">
      <div className='d-inline'> <Boton/> </div>
      </Link>

      </header>
  )
}

export default Header