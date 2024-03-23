import axios from 'axios';
import React, {createContext} from 'react';
import {BASE_URL} from '../../config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const SignIn = (email, password) => {
    console.log('here: ', email);
    try {
      axios
        .post(`${BASE_URL}/auth/login`, 
        {
          email,
          password,
        })
        .then(Response => {
          let userInfo = Response.data;
          console.log(`userInfo: `, userInfo);
        });
    } catch (error) {
      console.log(`error${error}`);
    }
  };

  return <AuthContext.Provider value={SignIn}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
