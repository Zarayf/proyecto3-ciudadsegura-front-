import { AuthContext } from '../../context/AuthContextProvider';
import { useContext, useState } from 'react';
import { newProblemService } from '../../service/newProblemService';
//import { useNavigate } from 'react-router-dom';
import styles from './FormNewProblem.module.css';
import { SelectDistrict } from '../selectDistrict/SelectDistrict';
import { json } from 'react-router-dom';

export const FormNewProblem = () => {
  const { token } = useContext(AuthContext);

  const [error, setError] = useState('');
  const [Image, setImage] = useState(null);
  const [reply, setReply] = useState('');

  //const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData(e.target);

      const newProblem = await newProblemService({ data, token });
      setReply(newProblem);
      
      //navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className={styles.section}>
      {' '}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titulo</label>
          <input type='text' name='title' />
        </div>
        <div>
          <label>Lugar</label>
          <input type='text' name='place_detail' />
        </div>
        <div>
          <label>Barrio</label>
          <select name='id_district'>
            <option value='1'>Bosque de los Árboles Conversadores</option>
            <option value='2'>Cair Paravel</option>
            <option value='3'>Archenland</option>
            <option value='4'>Montañas del León</option>
            <option value='5'>Islas Solitarias</option>
          </select>
        </div>
        <div>
          <label>Descripción</label>
          <input type='text' name='description' />
        </div>
        <div>
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
        <input type='submit' value='Enviar' />
        {error ? <p>{error}</p> : null}
        {reply ? <p>Has registrado el problema con exito.</p> : ""} 
        
      </form>
    </section>
  );
};

export default FormNewProblem;
