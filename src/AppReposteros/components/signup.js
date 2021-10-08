import React, { useState } from "react";
import {Navegador} from "./Navegador";
import {register} from './controller'

export const Signup = (props) => {
  
  
  const [valores, setState] = useState({
    nombres:"",
    email:"",
    phone:"",
    state:"",
    municipio:"",
    nick:"",
    password:""
  });

  const {nombres,email, phone, state, municipio,  nick,password}= valores;

  const [msg, setMsg] = useState("");
  const [typeAlert, setTypeAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //if (name === "" || email === "" || password === "") return null;
   
    
      const user={
      nombres,
      email, 
      phone, 
      state, 
      municipio,
      nick,
      password
    }  
   
    register(user)
    .then(data => { 
          
          setMsg("Usuario creado satisfactoriamente");
          setTypeAlert("alert alert-success mt-2");
         
          setState({ nombres: "", email: "", phone: "", state: "", municipio: "" , nick: "", password: ""  })
         
        })
          
    .catch(err => console.error(err));
       
   
    };


const handleInputChange = (e) => {
    const { value, name } = e.target;
    const cad = value.toLowerCase();
   
    if (name==="nombre"){
      setState({ ...valores, nombres: cad })
    } 

    if (name==="email"){
      setState({ ...valores, email: cad })
    }

    if (name==="phone"){
      setState({ ...valores, phone: cad })
    }  
    if (name==="estado"){
      setState({ ...valores, state: cad })
    }
    if (name==="municipios"){
      setState({ ...valores, municipio: cad })
    }
    
    if (name==="nick"){
      setState({ ...valores, nick: cad });
    } 
    
    if (name==="password"){
      setState({ ...valores, password: cad })
    }
    
  
   
};
  
  const formulario = () => (
  <>
    <div className="row p-4 mt-2 align-items-center justify-content-center vh-80">
        <div className="col-md-4 text-center">
          <div className="card">
            <div className="card-header">
             
              <p className="text-black disabled ">Registro de Reposteros</p>
            </div>

            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Nombre"
                  value={valores.nombres}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Correo electronico"
                  value={valores.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Teléfono"
                  value={valores.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group mt-2">
                <select
                  name="estado"
                  className="form-control"
                  value={valores.state}
                  onChange={handleInputChange}
                >
                  <option>Nueva Esparta</option>
                  <option>Miranda</option>
                  <option>Bolivar</option>
                </select>
             </div>
            <div className="form-group mt-2">
                <select
                    name="municipios"
                    className="form-control"
                    value={valores.municipio}
                    onChange={handleInputChange}
                  >
                    <option>Antolin del campo</option>
                    <option>Garcia</option>
                    <option>Diaz</option>
                  </select>
            </div>
           
            <div className="form-group mt-2">
                <input
                  type="text"
                  name="nick"
                  className="form-control"
                  placeholder="Indique nick de usuario"
                  value={valores.nick}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mt-2">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Indique contraseña"
                  value={valores.password}
                  onChange={handleInputChange}
                />
              </div>
                           
              <div className="row mt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-warning "
                >
                  Registrarse
                </button>
              </div>
              
              <div className="row mt-2">
                <button
                  className="btn btn-outline-primary"
                  onClick={()=> props.history.push("/signin")}
                >
                  Log in 
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
      <Navegador /> 
      {formulario()}
    </>
  );
};