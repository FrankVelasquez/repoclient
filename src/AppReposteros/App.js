import React, { useState, useEffect, useContext } from "react";
//import {Navegador} from "./components/Navegador";
import ls from "local-storage";
import { Specialties } from "./components/Specialties";
import { Globalcontext } from "./components/Globalcontext";
import {
  getPastryChefs,
  getAPastryChefsByTitle
  
} from "./components/controller";

const App = (props) => {
  const {handleRestApi, pastrys} = useContext(Globalcontext);    
  


  //const [reposteros, setReposteros] = useState([]);
  
  const [typeAlert, settypeAlert] = useState("");

  const [msg, setMsg] = useState("");
  

  
  //mapeo el array de 
  const ViewPastryChes = () => {
    return pastrys.map((repostero) => (
      <Specialties
      repostero={repostero}
        key={repostero._id}
        
      />
    ));
  };

  //consulta todos las tareas registradas en la base de datos
  const consultarApi = () => {
 
      
     getPastryChefs()
        .then((data) => {
           
          //actualizo el el Almacen o contexto
          handleRestApi(data);
          //setReposteros(pastrys);
          //console.log("reposteros", reposteros)
          
        })
        .catch((err) => {
          console.error(err)
          setMsg("Error al intentar recuperar la información");
          settypeAlert("alert alert-danger mt-2");
        });
    
  };


 /*  const HandleSearch = (search) => {
    const token = ls.get("jwt");
    if (!token) {
      props.history.push("/signin");
    }
    
    if (!search) {
      consultarApi();
    } else {
      getAPastryChefsByTitle(search)
        .then((data) => setReposteros(data))
        .catch((err) => {console.error(err)
          setMsg("Error al buscar la data de la tarea");
          settypeAlert("alert alert-danger mt-2");
        });
    }
  }; */


 useEffect(() => {
   //const token = ls.get("jwt");
   // if (!token) { 
   //   props.history.push("/"); 
       consultarApi();
       
    // } 
  }, []); 

  const formulario = () => (
    <>
      <div className="container">
        <div className="row mt-2">
           
          <div className="col-md-12">
            <div className="row">{ViewPastryChes()}</div>  
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {formulario()}
    </>
  );
};

export default App;