import React from 'react'

export default function Boton() {
    const styles = {
        width: "center",
        display: "flex",
    }

    const icon = {
        fontSize:  "60px",
        color: "#fff" 
    }
  return (
    <div style={styles} className="justify-content-center">
        <button type="button" className="btn btn-block animate__animated animate__fadeInUpBig">
        <i style={icon} className='bx bx-right-arrow-circle'></i></button>
        
        </div>
  )
}

