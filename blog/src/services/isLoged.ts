import api from "./api";

const isLoged = async () : Promise<boolean> => {
  if(!localStorage.getItem('Authorization')) return false;
  return api
    .get('/try_connect', {
      headers: {
        authorization: localStorage.getItem('Authorization'),
      },
    })
    .then((_) => {
      return true;
    })
    .catch((_) => {
      localStorage.removeItem('Authorization');
      return false;
    });
};

export default isLoged;