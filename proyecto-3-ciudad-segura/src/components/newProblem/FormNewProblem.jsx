import { AuthContext } from '../../context/AuthContextProvider';
import { useContext, useState } from 'react';
import { newProblemService } from '../../service/newProblemService';
import { useNavigate } from 'react-router-dom';
import styles from './FormNewProblem.module.css';
import stylesForm from '../../styles/form.module.css'


export const FormNewProblem = () => {
  const { token } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [Image, setImage] = useState(null);
  const [reply, setReply] = useState('');

  const navigate = useNavigate();

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
      setReply("");
    }
  };

  return (
    <section className={styles.section}>
      {' '}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titulo</label>
          <input type='text' 
                 name='title' 
                 onChange={(e) => setTitle(e.target.value)} // Actualizar el valor del título
          />
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
        <div className={stylesForm.field}>
          <input className={stylesForm.input} type='text' placeholder=' ' id="description" required="" name='description' />
          <label htmlFor="description">
            <span className={stylesForm.style="--i: 0"} >D</span>
            <span className={stylesForm.style="--i: 1"}>e</span>
            <span className={stylesForm.style="--i: 2"}>s</span>
            <span className={stylesForm.style="--i: 3"}>c</span>
            <span className={stylesForm.style="--i: 4"}>r</span>
            <span className={stylesForm.style="--i: 5"}>i</span>
            <span className={stylesForm.style="--i: 6"}>p</span>
            <span className={stylesForm.style="--i: 7"}>c</span>
            <span className={stylesForm.style="--i: 8"}>i</span>
            <span className={stylesForm.style="--i: 9"}>ó</span>
            <span className={stylesForm.style="--i: 10"}>n</span>
          </label>
         {/*  <div className={styles.Form.underline}></div> */}
        </div>
       {/*  <div>
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
        <input type='submit' value='Enviar' /> */}
        {error ? <p>{error}</p> : null}
        {reply ? <p>Has creado el usuario "{title}" con exito.</p> :  ""} 
        
      </form>
    </section>
  );
};

export default FormNewProblem;
