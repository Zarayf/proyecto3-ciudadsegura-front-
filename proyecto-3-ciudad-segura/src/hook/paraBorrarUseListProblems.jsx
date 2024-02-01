import { useState, useEffect } from 'react';
import { getProblemCompleteService } from '../service/getProblemCompleteService';

export const useListProblems = () => {
  const [problems, setProblems] = useState([]);
 // const [error, setError] = useState('');
    console.log("soy el hook");
  useEffect(() => {
    console.log("estoy en la primera línea del useEffect");
    const getProblem = async () => {
      try {
  
        const problems = await getProblemCompleteService();
        console.log("estoy dentro del useEffect");
        setProblems(problems.problems);
      } catch (error) {
     //   setError(error);
     console.error("error");
      }
    };

    getProblem();
  }, []);
  console.log("estoy fuera del useEffect");
  return problems;
};