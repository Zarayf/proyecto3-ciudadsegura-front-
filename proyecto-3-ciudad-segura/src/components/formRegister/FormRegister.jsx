import { useState } from 'react';
import { registerService } from '../../service/registerService';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/form.module.css';

export const Register = () => {
  const [user_name, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rta, setRta] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const r = await registerService({ user_name, email, pass });
      const user_name = data.get('user_name');

      setRta(r);
      setError('');
      setUsername(userName);

      navigate('/Login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {rta.status == 'ok' ? (
        <>
          <p>{rta.message}</p>
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
        </>
      ) : (
        ''
      )}
      {error ? <p className={styles.error}>{error}</p> : ''}
      <div className={styles.main}>
        <div className={styles.content}>
          <h2>Registro</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>Nombre de usuario</label>
              <input
                type='text'
                name='user_name'
                value={user_name}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label>Email</label>
              <input
                type='email'
                name='email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label>Contraseña</label>
              <input
                type='password'
                name='pass'
                value={pass}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label>Confirmar Contraseña</label>
              <input
                type='password'
                name='confirmarPassword'
                value={confirmPassword}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className={styles.submit}>
              <button className={styles.enviar} type='submit'>
                Enviar
              </button>
            </div>
            {reply ? <p>Has registrado el problema '{user_name}' con exito.</p> : ''}
          </form>
        </div>
      </div>
    </>
  );
};
