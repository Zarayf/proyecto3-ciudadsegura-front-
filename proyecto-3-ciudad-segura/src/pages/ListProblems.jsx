import { useParams } from 'react-router-dom';
import { useProblems } from '../hook/useProblems';
import style from '../styles/ListProblemsByIdDistrict.module.css';
import { update } from '../service/update';
import { AuthContext } from '../context/AuthContextProvider';
import { useContext } from 'react';

/* función que lista todos los problemas */
export const ListProblems = () => {
  const { token, user } = useContext(AuthContext);
  const { problems, error, updateProblems } = useProblems();


  const { VITE_API_URL } = import.meta.env;

  const handleUpdate = async (problemId) => {
    try {
      await update(problemId, token);
      const problem = problems.find(p=> (p.id_problem===problemId));
      problem.problem_status = "Resuelto";
      updateProblems();
    } catch (error) {
      console.error('error');
    }
  };

  /* Elemento que muestra el array de los problemas */
  return (
    <div className={style.div}>
      <h1>Problemas del barrio</h1>
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
                    <p> Título:{problem.title}</p>
                  </li>
                  <li>
                    <p> Descripción:{problem.description}</p>
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
                      <p> Estado:{problem.problem_status}</p>
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
