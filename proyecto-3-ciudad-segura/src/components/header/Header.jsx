import styles from './header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt='imagen logo' />
      <nav className={styles.nav}>
        <ul>
          <li className={styles.li}>
            <Link className={styles.link} to={'/'}>
              HOME
            </Link>
            {''}
            <Link className={styles.link} to={'/login'}>
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
