import React from "react";
import { Route, Routes } from "react-router-dom";
import Secciones from "../Componentes/Secciones";
import Header from "../Header";
import "../App.css";
import Tiendas from "../Componentes/Tiendas";
import Tiendas2 from "../Componentes/Tiendas2";
import Tiendas3 from "../Componentes/Tiendas3";

export default function Rutas() {
  return (
    <div className="App App-header">
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="*" element={<Secciones />} />
        <Route exact path="/Tiendas/:categoria/:tienda" element={<Tiendas />} />
        <Route exact path="/Tiendas2" element={<Tiendas2 />} />
        <Route exact path="/Tiendas3" element={<Tiendas3 />} />
        <Route path="/menu" exact element={<Secciones />} />
        <Route path="/Principal" exact element={<Header />} />
      </Routes>
    </div>
  );
}
