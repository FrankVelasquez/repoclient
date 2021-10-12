
import React, { useEffect, useContext } from 'react'
import ls from 'local-storage';
import { Globalcontext } from "./Globalcontext";
 
export const Exit = (props) => {
  const {handleChangeAuth} = useContext(Globalcontext);    
    useEffect(() => {
        const token = ls.get('jwt');
        if (token){
          ls.remove("jwt") 
          handleChangeAuth(false);
          props.history.push('/');
        }
      
    })
    
      return (
               <>
                {/*  <div className="">
                     <h1>redireccionando {props.auth}</h1>
                 </div> */}
              </> 
        )
    }