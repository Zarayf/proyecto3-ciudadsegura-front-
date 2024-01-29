import { useParams } from 'react-router-dom';
import { useProblems } from '../hook/useProblems';
import style from '../styles/ListProblemsByIdDistrict.module.css';
import { update } from '../service/update';
import { AuthContext } from '../context/AuthContextProvider';
import { useContext } from 'react';

export const ListProblemsByIdDistrict = () => {
  const { id_district } = useParams();
  const { token } = useContext (AuthContext);
  const { problems, error } = useProblems(id_district);

  const {VITE_API_URL} = import.meta.env;
  
  const handleUpdate = async (problem) => {
    

    try {
      

      await update( problem, token );

      /*navigate('/');*/
      console.log ("actualizado");
    } catch (error) {
      /*setError(error.message);*/
      console.error ("error");

    }
  };

  return (
    <div>
      <h2>Problemas del barrio</h2>

      {problems &&
        problems?.map((problem) => {
          return (
            <section key={problem.id_problem}>
              <ul>
                <div>
                  <li>
                    {problem.photo ? (
                      <img
                        className={style.img}
                        src={`${VITE_API_URL}/uploads/${problem.photo}`}
                        alt='foto_problema'
                      />
                    ) : null}
                  </li>
                <div>
                  <li><p>{problem.problem_status}</p></li>
                  <button onClick={ ()=> handleUpdate(problem.id_problem)  }> Marcar como hecho </button>
                </div>  

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
                </div>
              </ul>
            </section>
          );
        })}

      {error ? <p>{error}</p> : ''}
    </div>
  );
};
