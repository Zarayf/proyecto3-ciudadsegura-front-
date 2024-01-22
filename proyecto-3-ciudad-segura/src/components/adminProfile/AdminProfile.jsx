import { useContext } from "react"
import { AuthContext } from "../../context/AuthContextProvider"



export const AdminProfile = () => {

    const { user, logout } = useContext(AuthContext);

    //const { VITE_API_URL } = import.meta.env;

    return (
      <div>
        {user ? (
        <div>
            <h2>Bienvenido: {user.user_name} </h2>
            
            <button onClick={() => logout()}>Logout</button>
          </div>
        ) : (
          <p>No hay ningun usuario conectado</p>
        )}
      </div>
    );
};








