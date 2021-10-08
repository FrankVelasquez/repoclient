import React from "react";
import PropTypes from "prop-types";

const Reposteros = (props) => {
  
     const viewDetail= id=>{
        console.log(id)
     
       }
  
  return (
    <>
      <div className="col-md-3">
        <div className="card mt-3">
          <div className="card-header text-center">
            <h5>{props.valor.description.toUpperCase()}</h5> 
          </div>

          <div className="card-title text-center">
            <p className="text-danger mt-2"> Precio : {props.valor.price}  </p>
            <span className="badge badge-pill badge-danger ml-2"></span>
          </div>
          
          <div className="card-body text-center">
            
          </div>

          <div className="card-footer text-center">
            <button
              className="btn btn-warning"
             onClick={()=> viewDetail(props.valor._id)}
            >
              Ver detalle
            </button>
          </div>
        
        </div>
      </div>
    </>
  );
};
export default Reposteros;