import style from '../styles/ListProblemsByIdDistrict.module.css';
import { useListProblems } from '../hook/useListProblems';
//import { AuthContext } from '../context/AuthContextProvider';
//import { useContext } from 'react';

export const ListProblem = async () => {
  const {problems} = useListProblems();
  //const { user } = useContext (AuthContext);
  const {VITE_API_URL} = import.meta.env;
  //await getProblemCompleteService();
  console.log(problems,"son los problemas");
 /*  const handleUpdate = async (problem) => {
    

    try {
      navigate('/');
      console.log ("actualizado");
    } catch (error) {
      setError(error.message);
      console.error ("error");

    }
}; */
return (
  <div>
    <h2>Problemas de Narnia</h2>

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

   {/*  {error ? <p>{error}</p> : ''} */}
  </div>
);
};

