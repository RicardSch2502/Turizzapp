import React from "react";
import BotonPag2 from "./BotonPag2";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <Link to="/menu">
        <div className="d-inline">
          {" "}
          <BotonPag2 />{" "}
        </div>
      </Link>
      <h2 className="position-absolute top-0 animate__animated animate__bounceInUp">
        <font color="white ">Snacks</font>{" "}
      </h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100 bg-danger animate__animated animate__bounceInUp">
            <img
              src="https://images.unsplash.com/photo-1595431803487-919d791bd3ca?ixlib=rb-1.2.1&ixid=Mn
      wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
        <div class="col">
          <div class="card h-100 bg-danger animate__animated animate__bounceInUp">
            <img
              src="https://images.unsplash.com/photo-1595431803487-919d791bd3ca?ixlib=rb-1.2.1&ixid=Mn
      wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
        <div class="col">
          <div class="card h-100 bg-danger animate__animated animate__bounceInUp">
            <img
              src="https://images.unsplash.com/photo-1595431803487-919d791bd3ca?ixlib=rb-1.2.1&ixid=Mn
      wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              width={300}
              class="img-thumbnail mx-auto d-block"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
