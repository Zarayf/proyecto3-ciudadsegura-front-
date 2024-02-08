import { useState } from 'react';
import { changeRecoverPasswordService } from '../../service/changeRecoverPasswordService';
import { Link } from 'react-router-dom';
import styles from '../../styles/form.module.css';

export const ChangeRecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [recovery_code, setRecovery_code] = useState('');
  const [newPass, setNewPass] = useState('');
  const [error, setError] = useState('');
  const [confirmarPassword, setConfirmPassword] = useState('');
  const [rta, setRta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPass !== confirmarPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const r = await changeRecoverPasswordService({
        email,
        recovery_code,
        newPass,
        confirmarPassword,
      });
      setRta(r);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2>Recuperación de contraseña</h2>
        <p>Revise su email para obtener el código de recuperación</p>
        <form onSubmit={handleSubmit} id='form'>
          <div className={styles.field}>
            <label>Email</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label>Código de recuperación</label>
            <input
              type='text'
              name='recovery_code'
              value={recovery_code}
              onChange={(e) => setRecovery_code(e.target.value)}
            />
          </div>
          {
            <div className={styles.field}>
              <label>Ingrese nueva contraseña</label>
              <input
                type='password'
                name='newPass'
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
              />
            </div>
          }
          <div className={styles.field}>
            <label>Repita contraseña</label>
            <input
              type='password'
              name='confirmarPassword'
              value={confirmarPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className={styles.submit}>
            <button className={styles.enviar} type='submit'>
              Confirmar
            </button>
          </div>
          {error ? <p>{error}</p> : null}

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
        </form>
      </div>
    </section>
  );
};
