import { useState } from 'react';
import { registerService } from '../../service/registerService';
import { Link, useNavigate } from 'react-router-dom';
import styles from './formRegister.module.css';

export const Register = () => {
  const [user_name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rta, setRta] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');
  4;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const r = await registerService({ user_name, email, pass });
      setRta(r);
      setError('');
      navigate('/Login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <span>Registro</span>

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <input
              type='text'
              name='user_name'
              value={user_name}
              placeholder='Nombre de usuario'
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <input
              type='email'
              name='email'
              value={email}
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <input
              type='password'
              name='pass'
              value={pass}
              placeholder='Contraseña'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <input
              type='password'
              name='confirmarPassword'
              value={confirmPassword}
              placeholder='Confirmar Contraseña'
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className={styles.submit}>
            <button className={styles.enviar} type='submit'>
              Enviar
            </button>
          </div>
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
          {error ? <p>{error}</p> : ''}
        </form>
      </div>
    </div>
  );
};
