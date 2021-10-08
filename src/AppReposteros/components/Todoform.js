import React, { useState, useEffect } from "react";

export const Todoform = (props) => {
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
  const { _id, nombres, email, phone, state, municipio, nick, lugares } =
    valores;

  useEffect(() => {
    setState({
      _id: props.id,
      nombres: props.nombres,
      email: props.email,
      phone: props.phone,
      state: props.state,
      municipio: props.municipio,
      nick: props.nick,
      lugares: props.lugares,
    });
  }, [
    props._id,
    props.nombres,
    props.email,
    props.phone,
    props.state,
    props.municipio,
    props.nick,
    props.lugares,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setState({ ...valores, _id: "" })
    setState({ ...valores, nombres: "" })
    setState({ ...valores, email: "" })
    setState({ ...valores, phone: "" })
    setState({ ...valores, state: "" })
    setState({ ...valores, municipio: "" })
    setState({ ...valores, lugares: [] })


  
  };

  const HandleVallue = () => {
    return props._id ? "Actualizar" : "Guardar";
  };

  const formulario = () => (
    <>
      <div className="card bg-white">
        <form onSubmit={handleSubmit} className="card-body">
        <div className="card-header text-center">
            <h5>Mi información de contacto</h5> 
          </div>
       
         
          <div className="form-group mt-4">
            <label type="text" name="title" >
              {nombres}
            </label>
          </div>

          <div className="form-group">
            <label type="text" name="title" >
              {" "}
              {email}{" "}
            </label>
          </div>

          <div className="form-group">
            <label type="text" name="title" >
              {phone}
            </label>
          </div>

          <div className="form-group">
            <label type="text" name="title" >
              {state} - {municipio}
            </label>
          </div>
          {/*  <div className="form-group">Lugares
           <ul>
             {
                
             }
           </ul>
         </div> */}

          <div className="row mt-2">
            <button type="submit" className="btn btn-primary btn-darken4">
              Editar
            </button>
          </div>
        </form>
      </div>
    </>
  );
  return <>{formulario()}</>;
};
