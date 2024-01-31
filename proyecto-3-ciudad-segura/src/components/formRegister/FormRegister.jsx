import { useState } from 'react';
import { registerService } from '../../service/registerService';
import { Link } from 'react-router-dom';
import styles from './formRegister.module.css';

export const Register = () => {
  const [user_name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rta, setRta] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');

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
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label>Nombre de usuario</label>
        <input
          type='text'
          name='user_name'
          value={user_name}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='pass'
          value={pass}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirmar Password</label>
        <input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <input type='submit' value='Enviar' />
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
  );
};
