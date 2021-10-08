
import React, { useEffect } from 'react'
import ls from 'local-storage';

export const Exit = (props) => {
    
    useEffect(() => {
        const token = ls.get('jwt');
        if (token){
          ls.remove("jwt")
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