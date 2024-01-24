import { useState, useEffect } from 'react';
import { getproblemsByIdDisctrictService } from '../service/getproblemsByIdDisctrictService';

export const useProblems = (id_district) => {
  const [problems, setProblems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getproblemsByIdDisctrict = async () => {
      try {
        const problems = await getproblemsByIdDisctrictService(id_district);

        setProblems(problems.problems);
        // console.log(problems);
      } catch (error) {
        setError(error);
      }
    };

    getproblemsByIdDisctrict();
  }, [id_district]);

  return { problems, error };
};
