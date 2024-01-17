import styles from './header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt='imagen logo' />
      <nav>
        s<Link to={'/login'}>LOGIN</Link>
      </nav>
    </header>
  );
};
