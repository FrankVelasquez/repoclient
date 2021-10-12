
import {uri} from "./dotenv"

export const addSpecialities = async (esp) => {
  const options = {
    method: "POST",
    body: JSON.stringify(esp),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  };
  const url =  `${uri}/api/pastry`;
  try {
    const resp = await fetch(url, options);
    const json = await resp.json();
    return json;
  } catch (error) {
    return error;
  } 

}

export const login = async (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  const url =   `${uri}/auth/signin/`;
  try {
    const resp = await fetch(url, options);
    const json = await resp.json();
    return json;
  } catch (error) {
    return error;
  }
};

export const findById = async (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  const url =   `${uri}/auth/verify/`;
  try {
    const resp = await fetch(url, options);
    const json = await resp.json();
    return json;
  } catch (error) {
    return error;
  }
};



export const register = async (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  const url =  `${uri}/auth/signup/`; 
  
  try {
    const resp = await fetch(url, options);
    const json = await resp.json();
    return json;
  } catch (error) {
    return error;
  }

}

export const getPastryChefs = async () => {
  
  const options = {
    
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  
  const url =    `${uri}/api/pastry`;
  try {
    const resp = await fetch(url, options);
    const json = await resp.json();
    return json;
  } catch (error) {
    return error;
  }

}

export const getAPastryChefsById = async (value) => {
  const options = {
     headers: {
      Accept: "application/json",
      "Content-Type": "application/json"}
    };
    
    const url =  `${uri}/api/pastry/${value}`;
    try {
      const resp = await fetch(url, options);
      const json = await resp.json();
      return json;
    } catch (error) {
      return error;
    }
}

export const getAPastryChefsByTitle = async (value) => {
  const options = {
     headers: {
      Accept: "application/json",
      "Content-Type": "application/json"}
    };
    
    const url =  `${uri}/api/pastry/find/${value}`;
    try {
      const resp = await fetch(url, options);
      const json = await resp.json();
      return json;
    } catch (error) {
      return error;
    }
}

export const EditSpecialities = async (id, esp) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(esp),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  const url = `${uri}/api/pastry/${id}`;
  try {
    const resp = await fetch(url, options);
    const json = await resp.json();
    return json;
  } catch (error) {
    return error;
  }
}