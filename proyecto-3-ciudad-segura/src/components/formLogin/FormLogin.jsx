import { useContext, useState } from 'react';
import { loginUserService } from '../../service/loginUserService';
import { AuthContext } from '../../context/AuthContextProvider';
import { useNavigate, Link } from 'react-router-dom';
import styles from './formLogin.module.css';

export const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [pass, setPasswd] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { setToken } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const rta = await loginUserService({ email, pass });

      setToken(rta);

      navigate('/AdminPage'); //redirigir en forma automática a una det ruta
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h2>Login</h2>

        <form onSubmit={handleSubmit} id='form'>
          <div className={styles.field}>
            <label>Email</label>
            <input
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label>Contraseña</label>
            <input
              type='password'
              name='pass'
              onChange={(e) => setPasswd(e.target.value)}
            />
          </div>
          <div className={styles.enviar}>
            <button className={styles.login}>Login</button>
          </div>
          <div className={styles.recuperarpass}>
            <Link className={styles.link} to={'/user/password/recover'}>
              <p>Recuperar contraseña</p>
            </Link>
          </div>
          {error ? <p>{error}</p> : null}
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
