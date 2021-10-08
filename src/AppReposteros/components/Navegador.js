import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "reactstrap";
import ls from "local-storage";

export const  Navegador = (props) => {
  const [search, setsearch] = useState("");
  const [auth, setAuth] = useState(false);
  
  const HandleSearch = (e) => {
    e.preventDefault();

    props.onSearch(search);
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    const cad = value.toLowerCase();
    setsearch(cad);
  };

  useEffect(() => {
    
    const token = ls.get("jwt");

    if (token) {
      setAuth(true);
    }

    
  });

  const formulario = () => (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <a className="navbar-brand" href="/">
            Pastry Chefs Community
          </a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <NavItem
                className="nav-link"
                style={{ display: auth ? "none" : true }}
              >
                <Link className="nav-link" to="/signin">
                  Login
                </Link>
              </NavItem>

              <NavItem
                className="nav-link"
                style={{ display: auth ? "none" : true }}
              >
                <Link className="nav-link" to="/signup">
                  Registrarse
                </Link>
              </NavItem>

              <NavItem
                className="nav-link"
                style={{ display: auth ? true : "none" }}
              >
                <Link className="nav-link" to={`/Exit/${auth}`}>
                  Logout
                </Link>
                
                </NavItem>  

            </ul>

            <form className="d-flex" onSubmit={HandleSearch}>
              <select name="select" id="estados" className="form-control me-2">
                estados
                <option value="Aragua" id="1">
                  Nueva Esparta
                </option>
              </select>
              <select name="select" id="municipios"className="form-control me-2" >
                <option value="Aragua" id="1">
                  Aragua
                </option>
              </select>

              <input
                className="form-control me-2"
                //style={{ display: auth ? true : "none" }}
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                name="search"
                onChange={handleInputChange}
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
                
              >
                Buscar
              </button>

              <NavItem
                className="nav-link"
                style={{ display: auth ? true : "none" }}
              > 
              <Link className="nav-link text-sm" 
                    style={{ display: auth ? true : "none" }} 
                    to={`/config/${props.id}`}>
                  
                  Especialidades
              </Link>
              </NavItem>  


            </form>
          </div>
        </div>
      </nav>
    </>
  );

  return <>{formulario()}</>;
};