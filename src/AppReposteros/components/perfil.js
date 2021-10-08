import React, { useState, useEffect } from "react";
import { Navegador } from "./Navegador";
import Reposteros from "./viewSpecialties";
import { Todoform } from "./Todoform";
import { getAPastryChefsById } from "./controller";
import ls from "local-storage";

const Perfil = (props) => {
  
  const [especialidades, setEspecialidades] = useState([]);
  const [auth, setAuth] = useState(false);
  const [valores, setState] = useState({
    _id: "",
    nombres: "",
    email: "",
    phone: "",
    state: "",
    municipio: "",
    nick: "",
    lugares: "",
  });
  
  const { _id, nombres, email, phone, state, municipio, nick, lugares } = valores;

 

  //mapeo el array de especialidades y creo un card por cada una
  const ViewSpecialties = () => {
    return especialidades.map((esp, i) =>
      esp.resultado.map((result, j) => <Reposteros valor={result} key={j} />)
    );
  };

  useEffect(() => {
  
    if (props.location.data) {
      
      setAuth(props.location.auth)
      
      getAPastryChefsById(props.location.data)
      .then((data) => {
            
            setState({
              _id: data[0]._id,
              nombres: data[0].name,
              email: data[0].email,
              phone: data[0].phone,
              state: data[0].state,
              municipio: data[0].municipio,
              nick: data[0].nick
            });
            setEspecialidades(data)
   
      });
    }
    
    const token = ls.get('jwt');
    if (token){
     setAuth(true) 

    }

  }, []);

  const formulario = () => (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4 text-center">
            <Todoform
              _id={_id}
              nombres={nombres}
              email={email}
              phone={phone}
              state={state}
              municipio={municipio}
              nick={nick}
              lugares={lugares}
            />
          </div>

          <div className="col-md-8">
            <div className="row">{ViewSpecialties()}</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Navegador auth={auth} id={_id}/>
      {formulario()}
    </>
  );
};

export default Perfil;