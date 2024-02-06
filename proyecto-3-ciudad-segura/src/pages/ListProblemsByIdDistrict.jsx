import { useParams } from 'react-router-dom';
import { useProblems } from '../hook/useProblems';
import style from '../styles/ListProblemsByIdDistrict.module.css';
import { update } from '../service/update';
import { AuthContext } from '../context/AuthContextProvider';
import { useContext } from 'react';

export const ListProblemsByIdDistrict = () => {
  const { id_district } = useParams();
  const { token, user } = useContext(AuthContext);
  const { problems, error, updateProblems } = useProblems(id_district);
  const { VITE_API_URL } = import.meta.env;

  const handleUpdate = async (problemId) => {
    try {
      await update(problemId, token);
      const problem = problems.find((p) => p.id_problem === problemId);
      problem.problem_status = 'Resuelto';
      updateProblems();
    } catch (error) {
      console.error('error');
    }
  };

  return (
    <>
      <h1 className={style.titulo}>Problemas del barrio</h1>

      <div className={style.div}>
        {problems &&
          problems?.map((problem) => {
            return (
              <>
                <section className={style.section1} key={problem.id_problem}>
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
                          <div className={style.divnoimg}>
                            {' '}
                            <p className={style.noimg}>
                              El problema no contiene imagen
                            </p>
                          </div>
                        )}
                      </li>
                    </div>
                    <div className={style.info}>
                      <li>
                        <p>
                          {' '}
                          <span className={style.destacado}>Título: </span>
                          {problem.title}
                        </p>
                      </li>
                      <li>
                        <p>
                          {' '}
                          <span className={style.destacado}>Descripción: </span>
                          {problem.description}
                        </p>
                      </li>
                      <li>
                        <p>
                          {' '}
                          <span className={style.destacado}>
                            {' '}
                            Fecha creación:{' '}
                          </span>
                          {new Date(problem.create_date).toLocaleString()}
                        </p>
                      </li>

                      <div>
                        <li>
                          <p>
                            {' '}
                            <span className={style.destacado}>
                              Estado:
                            </span>{' '}
                            {problem.problem_status}
                          </p>
                        </li>

                        {user ? (
                          <button
                            className={style.bu}
                            onClick={() => handleUpdate(problem.id_problem)}
                          >
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
              </>
            );
          })}

        {error ? <p>{error}</p> : ''}
      </div>
    </>
  );
};
