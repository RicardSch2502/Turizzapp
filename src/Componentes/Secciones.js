import React, { useEffect, useState } from "react";
import BotonPag2 from "./BotonPag2";
import CardsCategorias from "./CardsCategorias";
import Carrusel from "./Carrusel";
import Nabvar from "./Nabvar";
import { Link } from "react-router-dom";
import axios from "../Caxios/Axios";

export default function () {
  const [dataCategoria, setDataCategoria] = useState([]);
  const obtenerCategorias = async () => {
    const categorias = await axios.get("/categoria/consultar");
    setDataCategoria(categorias.data);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <>
      <div className=" flex-row justify-content-center align-items-center">
        <Nabvar />
        <Carrusel />
        <h1 className="animate__animated animate__bounceInUp">
          <font color="white ">TurizzApp</font>{" "}
        </h1>

        <div className="">
          <Link to="/">
            <div className="">
              {" "}
              <BotonPag2 />{" "}
            </div>
          </Link>

          <div class="d-flex flex-wrap justify-content-center">
            {dataCategoria.map((categoria, index) => {
              return (
                <CardsCategorias
                  key={index}
                  title={categoria.nombre_categoria}
                  subtitle={categoria.subtitulo}
                  img={categoria.imagen}
                  id={categoria._id}
                />
              );
            })}

            {/* <div className="col">
              <div className="card h-100 alert-primary animate__animated animate__bounceInUp">
                <Link
                  to="/Tiendas2"
                  type="button"
                  class="btn btn-outline-prymary"
                >
                  <div class="card-body">
                    <h2 className="card-title">Tiendas Depart.</h2>
                    <h5>
                      <p className="card-text">Para vestir a la moda.</p>
                    </h5>
                    <img
                      src="https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg"
                      width={300}
                      class="img-thumbnail mx-auto d-block"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 alert-danger animate__animated animate__bounceInUp">
                <Link
                  to="/Tiendas3"
                  type="button"
                  class="btn btn-outline-prymary"
                >
                  <div class="card-body">
                    <h2 className="card-title ">Snacks</h2>
                    <h5>
                      <p className="card-text">Que no te falte el hambre.</p>
                    </h5>
                    <img
                      src="https://images.unsplash.com/photo-1595431803487-919d791bd3ca?ixlib=rb-1.2.1&ixid=Mn
      wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      width={300}
                      class="img-thumbnail mx-auto d-block"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="card h-100 alert-success animate__animated animate__bounceInUp">
              <Link
                to="/Formulario"
                type="button"
                class="btn btn-outline-prymary"
              >
                <div class="card-body">
                  <h2 className="card-title">mas</h2>
                  <img className="card-img-top" alt="..." />
                  <p className="card-text">proximamente.</p>
                </div>
              </Link>
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
}
