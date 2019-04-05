import axios from 'axios';

const setAuthToken = token => {
  if(token){
    //if a token is passed in apply auh token to request
  axios.defaults.headers.common['Authorization']=token;
  } else {
    //delete the auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;