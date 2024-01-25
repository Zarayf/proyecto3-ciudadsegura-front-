import { useParams } from 'react-router-dom';
import { useProblems } from '../hook/useProblems';

export const ListProblemsByIdDistrict = () => {
  const { id_district } = useParams();

  const { problems, error } = useProblems(id_district);

  const {VITE_API_URL} = import.meta.env;

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
                      src={`${VITE_API_URL}/uploads/${problem.photo}`}
                        alt="foto_problema"
                      />
                    ) : null}
                    
                  </li>
                <div>
                  <li><p>{problem.problem_status}</p></li>
                </div>  
                </div>
                <div>
                  <li><p> Título:{problem.title}</p></li>
                  <li><p> Descripción:{problem.description}</p></li>  
                  <li><p> Fecha creación:{new Date(problem.create_date).toLocaleString()}</p></li>
                </div>
              </ul>
            </section>
          );
        })}
      

      {error ? <p>{error}</p> : ''}
    </div>
  );
};
