import { AuthContext } from '../../context/AuthContextProvider';
import { useContext, useState } from 'react';
import { newProblemService } from '../../service/newProblemService';
//import styles from './FormNewProblem.module.css';
import styles from '../formRegister/formRegister.module.css';

export const FormNewProblem = () => {
  const { token } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [Image, setImage] = useState(null);
  const [reply, setReply] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData(e.target);
      const newTitle = data.get('title'); // Obtener el valor del título


      const newProblem = await newProblemService({ data, token });
      setTitle(newTitle); // Almacenar el valor del título en la variable de estado
      setReply(newProblem);
      setError("");
      
    } catch (error) {
      setError(error.message);
      setReply('');
    }
  };

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2>Nuevo problema</h2>{' '}
        <form onSubmit={handleSubmit} id='form'>
          <div className={styles.field}>
            <input type='text' name='title' />
            <label>Titulo</label>
          </div>
          <div className={styles.field}>
            <input type='text' name='place_detail' />
            <label>Lugar</label>
          </div>
          <div className={styles.field}>
            <select name='id_district'>
              <option value='1'>Bosque de los Árboles Conversadores</option>
              <option value='2'>Cair Paravel</option>
              <option value='3'>Archenland</option>
              <option value='4'>Montañas del León</option>
              <option value='5'>Islas Solitarias</option>
            </select>
            <label>Barrio</label>
          </div>
          <div className={styles.field}>
            <input type='text' name='description' />
            <label>Descripción</label>
          </div>
          <div className={styles.field}>
            <input
              type='file'
              name='photo'
              accept='image/*'
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label>Imagen</label>
          </div>
          <div>
            {Image ? (
              <img
                className={styles.img}
                src={URL.createObjectURL(Image)}
                alt='image'
              />
            ) : null}
          </div>
          <div className={styles.submit}>
            <button className={styles.enviar} type='submit'>
              Enviar
            </button>
          </div>
          {error ? <p>{error}</p> : null}
          {reply ? <p>Has registrado el problema con exito.</p> : ''}
        </form>
      </div>
    </section>
  );
};

export default FormNewProblem;
