import { Link } from "react-router-dom";
const CardsCategorias = (props) => {
  return (
    <div className="col m-2 flex-wrap min-width-300 max-width-400">
      <div className="card h-100 alert-warning animate__animated animate__bounceInUp">
        <Link
          to={`/Tiendas/${props.title}/${props.id}`}
          type="button"
          class="btn btn-outline-prymary"
        >
          <div class="card-body">
            <h2 className="card-title">
              <font color="light">{props.title}</font>
            </h2>
            <h5>
              <p className="card-text">
                <font color="light">{props.subtitle}</font>
              </p>
            </h5>
            <img
              src={props.img}
              width={300}
              class="img-thumbnail mx-auto d-block"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardsCategorias;
