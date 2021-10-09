import React, { useState } from "react";
import {Navegador} from "./Navegador";
import ls from "local-storage";
import {login, findById} from './controller'

export const Signin = (props) => {
  
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const [msg, setMsg] = useState(""); 
  const [id, setId]= useState(""); 

  const handleInputChange = e => {
    const { value, name } = e.target;
    
    if (name==="nick"){
      setNick(value.toLowerCase());
    }

    if (name==="password"){
      setPassword(value.toLowerCase());
    }

   
  };
  
/*   useEffect(() => {
     
     if (auth) { 
     
      //props.history.push({pathname:'/perfil', data: id})
       
      } 
   }, []); */

  //const goTo = id =>  (props.history.push({pathname:'/perfil', data: id, auth:auth}));

  const handleSubmit = e => {
    e.preventDefault();
 
    if (nick === "" || password === "") return setMsg("Sus credenciales no son correctas");
 
    const user = {nick,password};
 
    login(user)
      .then(data => { 
        if (data.auth) {
            if (typeof window !== "undefined") {
              ls.set("jwt", JSON.stringify(data.token));
              setAuth(true);
              
            }
  
            } else {
              setMsg("Sus credenciales no son correctas");
              setNick("");
              setPassword("");
            }
          })
      .catch((err) => {
        setMsg("Hubo un error desconocido");
        setNick("");
        setPassword("");
      })
      
      if(auth){
        findById(user)
        .then(info => {
                      setId(info.data);  
                      setAuth(true);
                      props.history.push({pathname:"/perfil", data: id, auth:auth})
        
                      })
       };
  
  }
   
  const formulario = () => (
  <>
   
    <div className="row p-4 mt-1 align-items-center justify-content-center vh-80">
      <div className="col-md-4 text-center">
        <div className="card bg-white ">
          <div className="card-header">
         
            <p className="text-black disabled">Inicie sesión</p>
          </div>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-group mt-2">
              <input
                type="text"
                name="nick"
                className="form-control"
                placeholder="Correo electronico"
                value={nick}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Indique contraseña"
                value={password}
                onChange={handleInputChange}
              />
            </div>

            <div className="row mt-2">
              <button type="submit" className="btn btn-warning mt-2 ">
                Iniciar sesión
              </button>
            </div>
            <div className="row mt-2">
                <button
                  className="btn btn-outline-primary "
                  onClick={()=> props.history.push("/signup")}
                >
                  Registrarse
                </button>
              </div>
            <div className="form-group">
              <div
                className="alert alert-danger mt-2"
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
)


  return (
    <>
      <Navegador auth={auth} />
       {formulario()} 
     
    </>
  );
};