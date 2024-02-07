import { AuthContext } from '../../context/AuthContextProvider';
import { useContext, useState } from 'react';
import { newProblemService } from '../../service/newProblemService';
//import styles from './FormNewProblem.module.css';
import styles from '../formRegister/formRegister.module.css';

export const FormNewProblem = () => {
  const { token } = useContext(AuthContext);

  const [error, setError] = useState('');
  const [Image, setImage] = useState(null);
  const [reply, setReply] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData(e.target);

      const newProblem = await newProblemService({ data, token });
      setReply(newProblem);
      setError('');
      //navigate('/AdminPage');
    } catch (error) {
      setError(error.message);
      setReply('');
    }
  };

  return (
    <section className={styles.main}>
      <div className={styles.content}>

        <h2>Nuevo problema</h2>
      {' '}
      <form onSubmit={handleSubmit} id='form'>
        <div className={styles.field}>
          <label>Titulo</label>
          <input type='text'name='title' />
        </div>
        <div className={styles.field}>
          <label>Lugar</label>
          <input type='text' name='place_detail'/>
        </div>
        <div className={styles.field}>
        <label>Barrio</label>
          <select name='id_district'>
            <option value='1'>Bosque de los Árboles Conversadores</option>
            <option value='2'>Cair Paravel</option>
            <option value='3'>Archenland</option>
            <option value='4'>Montañas del León</option>
            <option value='5'>Islas Solitarias</option>
          </select>
        </div>
        <div className={styles.field}>
          <label>Descripción</label>
          <input type='text' name='description' />
        </div>
        <div className={styles.field}>
          <label>Imagen</label>
          <input
            type='file'
            name='photo'
            accept='image/*'
            onChange={(e) => setImage(e.target.files[0])}
          />
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
