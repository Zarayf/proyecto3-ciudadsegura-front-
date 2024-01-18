import imgPrincipal from '../img/imgPrincipal.jpg';
import styles from '../styles/home.module.css';
export const Home = () => {
  return (
    <>
      <section className={styles.section}>
        <img className={styles.img} src={imgPrincipal} alt='foto portada' />
        <form>
          <input type='text' />
        </form>
      </section>
    </>
  );
};
