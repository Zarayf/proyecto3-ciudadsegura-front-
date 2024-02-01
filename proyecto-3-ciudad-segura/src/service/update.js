export const update = async (problem, token) => {
  const url = `${import.meta.env.VITE_API_URL}/problems/${problem}`;

  // const dataStatus = {
  //   problem_status: problem.problem_status,
  // };

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      authorization: token,
    },
    // body: JSON.stringify(dataStatus),
  });

  const json = await response.json();

  console.log(json.data);

  return json;
};
