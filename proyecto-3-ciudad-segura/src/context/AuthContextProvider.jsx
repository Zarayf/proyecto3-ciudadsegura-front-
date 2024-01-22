import { createContext, useState, useEffect } from 'react';
import { getDataUserLoggedService } from '../service/getDataUserLoggedService';
import { PropTypes } from 'prop-types';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('token', token);

  }, [token]);

  useEffect(() => {
    const getDataUserLogged = async () => {
      try {
        const data = await getDataUserLoggedService({ token });
        setUser(data);
      } catch (error) {
        //logout(); lo dejamos comentado hasta que corrijamos errores. Nos está borrando el token por entrar algún error (LIDIA)
        console.error(error);
      }
    };
    getDataUserLogged();
  }, [token]);

  const logout = () => {
    setToken('');
    setUser(null); 
    
  };


  return (
    <AuthContext.Provider value={{ token, user, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
// Valido con propTypes para que no siga marcando en rojo...
AuthContextProvider.propTypes = { children: PropTypes.node.isRequired };
