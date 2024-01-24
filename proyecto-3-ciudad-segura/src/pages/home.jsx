// import imgPrincipal from '../img/imgPrincipal.jpg';
import { SelectDistrict } from '../components/SelectDistrict';

import styles from '../styles/home.module.css';

export const Home = () => {
  return (
    <>
      <section className={styles.section}>
        <form className={styles.form}>
          <label> ¿ Qué barrio quieres consultar ?</label>
          <SelectDistrict />
          <button>Buscar</button>
        </form>
      </section>
    </>
  );
};
