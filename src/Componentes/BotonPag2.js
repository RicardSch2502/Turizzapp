import React from "react";

export default function Boton() {
  const styles = {
    width: "right",
    display: "flex",
  };

  const icon = {
    fontSize: "60px",
    color: "#fff",
  };
  return (
    <button
      type="button"
      className="btn btn-block animate__animated animate__fadeInUpBig"
    >
      <i style={icon} className="bx bx-left-arrow-circle"></i>
    </button>
  );
}
