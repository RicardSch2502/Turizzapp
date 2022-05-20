import React, { useEffect, useState } from "react";
import BotonPag2 from "./BotonPag2";
import { Link, useParams } from "react-router-dom";
import axios from "../Caxios/Axios";
import CardsTiendas from "../Componentes/CardsTiendas";

export default function () {
  const { tienda, categoria } = useParams();
  console.log(tienda);
  const [dataTiendas, setDatatiendas] = useState([]);

  const consultartiendas = async () => {
    const tiendas = await axios.get(`tienda/consultarUno/${tienda}`);
    setDatatiendas(tiendas.data);
  };

  useEffect(() => {
    consultartiendas();
    console.log(dataTiendas);
  }, []);

  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <Link to="/menu">
        <div className="d-inline">
          {" "}
          <BotonPag2 />{" "}
        </div>
      </Link>
      <h2 className="position-absolute top-0 animate__animated animate__bounceInUp">
        <font color="white ">{categoria}</font>{" "}
      </h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {dataTiendas.map((tienda) => {
          return (
            <CardsTiendas
              img="https://i.etsystatic.com/22616986/r/il/2354cb/2377755787/il_794xN.2377755787_p38f.jpg"
              title={tienda.nombre}
            >
              {tienda.descripcion}
            </CardsTiendas>
          );
        })}
        <Link to="/formularios">
          <div class="col">
            <div class="card h-100 bg-light animate__animated animate__bounceInUp">
              <img
                src="https://images.unsplash.com/photo-1611396000732-f8c9a933424f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw
              aG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                width={300}
                class="img-thumbnail mx-auto d-block"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
