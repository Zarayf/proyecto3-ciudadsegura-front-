import { useState } from 'react';
import { changeRecoverPasswordService } from '../../service/changeRecoverPasswordService';
import { useNavigate } from 'react-router-dom';

export const ChangeRecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [regCode, setRegCode] = useState('');
  const [newPass, setNewPass] = useState('');
  //const [confirmNewPass, setConfirmNewPass] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

  /*   if (newPass !== confirmNewPass) {
    setError('Las contaseñas son distintas');
      return;
    } */

    try {
      const data = new FormData(e.target);

      await changeRecoverPasswordService(data);

      navigate('/login');
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
            value={regCode}
            onChange={(e) => setRegCode(e.target.value)}
            placeholder='Ingrese codigo'
          />
        </div>
        <div>
          <label>Ingrese nueva contraseña</label>
          <input
            type="password"
            name='newPass'
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            placeholder='Nueva contraseña'
          />
        </div>
         {/* <div>
          <label>Repita nueva contraseña</label>
          <input
            type='password'
            name='confirmNewPass'
            value={confirmNewPass}
            onChange={(e) => setConfirmNewPass(e.target.value)}
            placeholder='Repita contraseña'
          />
        </div> */}
        <button>Confirmar</button>
        {error ? <p>{error}</p> : null}
      </form>
    </div>
  );
};
