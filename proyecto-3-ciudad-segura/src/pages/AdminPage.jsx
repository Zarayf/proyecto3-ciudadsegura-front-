import { AdminProfile } from '../components/adminProfile/AdminProfile';
import { Link } from 'react-router-dom';
import styles from '../styles/adminPage.module.css';

export const AdminPage = () => {
  return (
    <div className={styles.div}>
      <AdminProfile />
      <nav>
        <Link to={'/NewProblem'}>Crear problema</Link>
        {'  |  '}
        <Link to={'/ListProblemsByIdDistrict'}>Listar/Editar los problemas por barrio</Link>
        {'  |  '}
        <Link to={'/ListProblems'}>Listar/Editar todos problemas</Link>
        {'  |  '}
        <Link to={'/Register'}>Crear otro usuario</Link>
        {'  |  '}
      </nav>
    </div>
  );
};
