import React, { useState, useEffect } from "react";
import {Navegador} from "./Navegador";
import {register} from './controller'

export const RegisterSpecialties = (props) => {
  //const [id,setId]=useState("")
  const [service, setService] = useState(false);
  const [lugares, setLugares] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  //const [precios, setPrecios] = useState([]); 
  const [c1, setCampo1]= useState(false);
  const [c2, setCampo2]= useState(false);
  const [c3, setCampo3]= useState(false);
  const [precio1, setPrecio1]= useState(10.00);
  const [precio2, setPrecio2]= useState(20.0);
  const [precio3, setPrecio3]= useState(30.0);
  
  const [msg, setMsg] = useState("");
  const [typeAlert, setTypeAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

      const datos={
      lugares,
      especialidades 
      
    }  
   
    register(datos)
      .then(data => { setMsg("Usuario creado satisfactoriamente ")
            setTypeAlert("alert alert-success mt-2");   
           })
          //   setState({
          //     nombres:"",
          //     email:"",
          //     phone:"",
          //     state:"",
          //     municipio:"",
          //     nick:"",
          //     password:""
          //   })  
       
            
      .catch(err => console.error(err));
    
      };


const handleService = (e) => {
   setService(!service)
   
};

const handleMun=(e)=>{
  const abc = document.getElementById("inputGroupSelect03").value
  setLugares(lugares => lugares.concat(abc))
 
}
 
const handleCambio=(e)=>{
  const { value, name } = e.target;
  setEspecialidades(especialidades => especialidades.concat(value))
  if  (name==="s1"){
  setCampo1(true)
  }
  if  (name==="s2"){
    setCampo2(true)
  }
  if  (name==="s3"){
    setCampo3(true)
    }
}

const handleInputChange = e => {
  const { value, name } = e.target;
  
  if (name==="p1"){
    setPrecio1(value);
  }

  if (name==="p2"){
    setPrecio2(value);
  }
  if (name==="p3"){
    setPrecio3(value);
  }


 
}

// useEffect(() => {
//  setId(props.id);
//   if (props.id) {
    
//   }
// }, []);


  const formulario = () => (
  <>
    <div className="row p-4 mt-2 align-items-center justify-content-center vh-80">
        <div className="col-md-4 text-center">
          <div className="card bg-grey ">
            <div className="card-header">
             
              <p className="text-black disabled">Configuraciones</p>
            </div>

            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="nombre"
                  value="Servicio técnico"
                  id="servicio"
                  onClick={handleService}
                />
                <b><label className="form-check-label" htmlFor="servicio">Servicio técnico</label></b>
              </div>

             <div style={{ display: service ? true : "none" }}> 
              <p >Indique los Municipios</p>
              <div className="input-group mb-2">
                <button className="btn btn-outline-success" type="button" onClick={handleMun} >aceptar</button>
                <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected name="municipio" >Seleccione...</option>
                    <option value="Antolin del campo">Antolin del campo</option>
                    <option value="Garcia">Garcia</option>
                    <option value="Diaz">Diaz</option>
                    <option value="Mariño">Mariño</option>
                </select>
             </div>
             </div>
             <div style={{ display: service ? true : "none" }}> 
              <p >Servicio a domicilio a :</p>
                <ul style={{ display: service ? true : "none" }}>
                  {lugares.map((lugar, i) => {
                    return <li key={i} className="text-danger">{lugar}  </li>;
                  })} 

                </ul>
             </div> 
            

              <b><p className="text-center">Actividades</p></b>
              <div className="form-group mt-1">
      
                <select className="form-select mt-2" id="input1" selected name="s1"
                                    
                                    onChange={handleCambio}>
                    <option >Seleccione...</option>
                    <option  id="a1" value="Galleteria">Galleteria</option>
                    <option id="a2" value="Fondant">Fondant</option>
                    <option  id="a3" value="Pasteleria">Pasteleria</option>
                </select>
                <input  
                  type="text"
                  className="form-control mt-1"
                  style={{ display: c1 ? true : "none" }}
                  placeholder="Indique precio"
                  name="p1"
                  value={precio1}
                  onChange={handleInputChange}
                  
                /> 
                
                               

                <select className="form-select mt-2" id="input2" onChange={handleCambio}  name="s2">
                    <option selected value="Galleteria">Galleteria</option>
                    <option  id="a5" value="Fondant">Fondant</option>
                    <option  id="a6" value="Pasteleria">Pasteleria</option>
                </select>
                
                <input  
                  type="text"
                  className="form-control mt-1 bg-grey"
                  style={{ display: c2 ? true : "none" }}
                  placeholder="Indique precio"
                  name="p2"
                  value={precio2}
                  onChange={handleInputChange}
               
                /> 
            
                <select className="form-select mt-2" id="input3"  onChange={handleCambio}  name="s3">
                    <option selected >Seleccione...</option>
                    <option id="a7" value="Galleteria">Galleteria</option>
                    <option  id="a8" value="Fondant">Fondant</option>
                    <option id="a9" value="Pasteleria">Pasteleria</option>
                </select>
                <input  
                  type="text"
                  className="form-control mt-1"
                  style={{ display: c3 ? true : "none" }}
                  placeholder="Indique precio"
                  name="p3"
                  value={precio3}
                  onChange={handleInputChange}
               
                /> 
               

             </div>
                  
            
              <div className="row mt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-warning mt-2 "
                >
                  Guardar
                </button>
              </div>
              <div className="form-group">
                <div
                  className={typeAlert}
                  style={{ display: msg ? true : "none" }}
                >
                  <small> {msg} </small>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  </>

  );


  return (
    <>
      <Navegador auth={false}/> 
      {formulario()}
    </>
  );
};