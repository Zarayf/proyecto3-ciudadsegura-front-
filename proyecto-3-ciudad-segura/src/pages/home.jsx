// import imgPrincipal from '../img/imgPrincipal.jpg';
import { SelectDistrict } from '../components/selectDistrict/SelectDistrict';

import styles from '../styles/home.module.css';

export const Home = () => {
  return (
    <>
      <section className={styles.section}>
        <form className={styles.form}>
          <p> ¿ Qué barrio quieres consultar ?</p>
          <SelectDistrict />
        </form>
      </section>
    </>
  );
};
