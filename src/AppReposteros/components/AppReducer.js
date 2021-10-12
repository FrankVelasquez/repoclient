 const appReducer = (state, action) =>{
  console.log( "los estados", state)
  console.log( "las acciones", action)
  
  switch (action.type) {
    case "UPDATE_PASTRYS":
      return ({...state, pastrys:action.payload.datos})
      
    case "CHANGE_AUTH":
      return ({...state, auth:action.payload})
    
    case "DELETE_PASTRY":  
        break;
    default:
      break;    

  }

 

 
 


}
export default appReducer;