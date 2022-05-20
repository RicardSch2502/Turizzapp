const Tiendas = (props) => {
  return (
    <div class="col">
      <div class="card h-100 bg-warning animate__animated animate__bounceInUp">
        <img
          src={props.img}
          width={300}
          class="img-thumbnail mx-auto d-block"
        />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Tiendas;
