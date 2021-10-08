import React from "react";
import PropTypes from "prop-types";

export const Specialties = (props) => {
  
  const viewDetail= id=>{
    console.log(props)
    console.log(id)

  }
  
  return (
    <>
      <div className="col-md-3">
        <div className="card mt-3">
          <div className="card-header text-center">
            <h5>{props.repostero.name}</h5>
          </div>

          <div className="card-title text-center">
            <p className="text-danger mt-2"> Telefono : {props.repostero.phone} </p>
            <span className="badge badge-pill badge-danger ml-2"></span>
          </div>
          <div className="card-body text-center">
            <p>
              Ubicacion : {props.repostero.state}-{props.repostero.municipio}{" "}
            </p>
            <p>
              {props.repostero.lugares
                ? "Servicio a Domicilio en"
                : "No ofrece Delivery"}
            </p>
            {props.repostero.lugares ? (
              <ul>
                {props.repostero.lugares.map((lugar, i) => {
                  return <li key={i} value={lugar}></li>;
                })}
              </ul>
            ) : (
              ""
            )}
          </div>

          <div className="card-footer text-center">
            <button
              className="btn btn-warning"
              onClick={()=> viewDetail(props.repostero._id)}
            >
              Ver detalle
            </button>
          </div>
        </div>
      </div>
    </>
  );
};