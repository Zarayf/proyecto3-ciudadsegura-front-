import { AdminProfile } from "../components/adminProfile/AdminProfile";
import { Link } from "react-router-dom";

export const AdminPage = () => {


  return(
    <>
      <AdminProfile/>
      <nav>
      <Link to={"/NewProblem"}>Crear problema</Link>
      {'  |  '}
       <Link to={"/EditProblem"}>Editar problema</Link>
      {'  |  '}  
      <Link to={"/ListProblem"}>Listar problemas</Link>
      {'  |  '}  
      </nav>

    </>
    );
  };

  