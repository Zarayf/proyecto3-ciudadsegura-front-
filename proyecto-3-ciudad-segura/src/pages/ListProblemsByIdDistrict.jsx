import { useParams } from 'react-router-dom';
import { useProblems } from '../hook/useProblems';

export const ListProblemsByIdDistrict = () => {
  const { id_district } = useParams();

  const { problems, error } = useProblems(id_district);

  // const {VITE_API_URL} = import.meta.env;

  return (
    <div>
      <h2>Problemas del barrio</h2>

      {problems &&
        problems?.map((problem) => {
          return (
            <div key={problem.id_problem}>
              <p> titulo:{problem.title}</p>
            </div>
          );
        })}

      {error ? <p>{error}</p> : 'error'}
    </div>
  );
};
