const Nabvar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-white bg-white animate__animated animate__bounceInUp">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          TurizzApp
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-5 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Categorias
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Tiendas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Ubicaciones</a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nabvar;
