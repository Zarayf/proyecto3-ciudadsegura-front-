//import { useParams } from 'react-router-dom';
import { useProblems } from '../hook/useProblems';
import style from '../styles/ListProblemsByIdDistrict.module.css';
import { update } from '../service/update';
import { AuthContext } from '../context/AuthContextProvider';
import { useContext } from 'react';

export const ListProblems = () => {
  const { token, user } = useContext(AuthContext);
  const { problems, error, updateProblems } = useProblems();
  // const [status, setStatus] = useState('');

  const { VITE_API_URL } = import.meta.env;

  const handleUpdate = async (problemId) => {
    try {
      await update(problemId, token);
      const problem = problems.find(p=> (p.id_problem===problemId));
      problem.problem_status = "Resuelto";
      console.log(problem);
      updateProblems();
      /*navigate('/');*/
    } catch (error) {
      /*setError(error.message);*/
      console.error('error');
    }
  };

  return (
    <div className={style.div}>
      <h1>Lista de problemas</h1>
      <pr>

      </pr>
      {problems &&
        problems?.map((problem) => {
          return (
            <section className={style.section} key={problem.id_problem}>
              <ul>
                <div>
                  <li>
                    {problem.photo ? (
                      <img
                        className={style.img}
                        src={`${VITE_API_URL}/uploads/${problem.photo}`}
                        alt='foto_problema'
                      />
                    ) : (
                      <p>El problema no contiene imagen</p>
                    )}
                  </li>
                </div>
                <div>
                  <li>
                    <p><h3> Título: {problem.title}</h3></p>
                  </li>
                  <li>
                    <p> Descripción: {problem.description}</p>
                  </li>
                  <li>
                    <p>
                      {' '}
                      Fecha creación:
                        {new Date(problem.create_date).toLocaleString()}
                    </p>
                  </li>
                  {/* <<<<<<<<<<<<<<<<<<<<<<<< */}
                  <div>
                    <li>
                      <p> Estado: {problem.problem_status}</p>
                    </li>
                    {user ? (
                      <button onClick={() => handleUpdate(problem.id_problem)}>
                        {' '}
                        Marcar como Resuelto{' '}
                      </button>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </ul>
            </section>
          );
        })}

      {error ? <p>{error}</p> : ''}
    </div>
  );
};
