import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import {Signin} from './components/signin';
import {Signup} from './components/signup';
import Perfil from './components/perfil';
import {Exit} from './components/Exit'; 
import {RegisterSpecialties} from './components/RegisterSpecialties'
import PageNotFound from "./components/PageNotFound";
import Navegador from "./components/Navegador"
import { Proveedor } from "./components/Globalcontext";

const Routes = () => {
  return (
      
      <Router>
      
        <Proveedor> 
          <Navegador />
           <Switch>
         
            <Route exact path="/" component={App} />
            <Route  path="/signin" component={Signin}/>
            <Route  path="/signup" component={Signup}/>
            <Route  path="/perfil" component={Perfil}/>
            <Route  path="/config" component={RegisterSpecialties}/>
            <Route path="/exit/:id" component={Exit}/> 
            <Route path="*" component={PageNotFound} />
            
          </Switch>
          </Proveedor>
    </Router>
  );
};

export default Routes;