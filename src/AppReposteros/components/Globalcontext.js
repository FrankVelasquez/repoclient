import {createContext, useReducer} from "react";
import appReducer from "./AppReducer";


const initialState = {auth: false,
                      pastrys:[]
                      }

export const Globalcontext= createContext(initialState)

export const Proveedor =({children})=>{
  
  const [state, dispatch] = useReducer(appReducer, initialState)
  
  const handleChangeAuth=(autorization)=>{
      dispatch({type: "CHANGE_AUTH", payload:autorization})
   }
    
  const handleRestApi=(datos)=>{
    dispatch({type: "UPDATE_PASTRYS", payload:{datos}})
 }

    return (<Globalcontext.Provider value={{...state, handleChangeAuth, handleRestApi}}>
        {children}
    </Globalcontext.Provider>)    

}

