import { createContext, useState, useEffect } from 'react';
// import { getDataUserLoggedService } from '../service/getDataUserLoggedService';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  // const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  // useEffect(() => {
  //   const getDataUserLogged = async () => {
  //     try {
  //       const data = await getDataUserLoggedService({ token });
  //       data;
  //     } catch (error) {
  //       logout();
  //     }
  //   };

  //   getDataUserLogged();
  // }, [token]);

  const logout = () => {
    setToken('');
    // setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
