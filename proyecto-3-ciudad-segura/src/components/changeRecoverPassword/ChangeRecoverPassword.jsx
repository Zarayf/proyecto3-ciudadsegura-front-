import { useState } from 'react';
import { changeRecoverPasswordService } from '../../service/changeRecoverPasswordService';
import { Link } from 'react-router-dom';

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
    <div>
      <div>
        <p>Revise su email para obtener el código de recuperacion</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Ingrese email'
          />
        </div>
        <div>
          <label>Código de Recuperación</label>
          <input
            type='text'
            name='recovery_code'
            value={recovery_code}
            onChange={(e) => setRecovery_code(e.target.value)}
            placeholder='Ingrese codigo'
          />
        </div>
        {
          <div>
            <label>Ingrese nueva contraseña</label>
            <input
              type='password'
              name='newPass'
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              placeholder='Nueva contraseña'
            />
          </div>
        }
        <div>
          <label>Repita contraseña</label>
          <input
            type='password'
            name='confirmarPassword'
            value={confirmarPassword}
            placeholder='Confirmar Contraseña'
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button>Confirmar</button>
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
  );
};
