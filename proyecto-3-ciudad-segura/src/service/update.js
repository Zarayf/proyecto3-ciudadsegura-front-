export const update = async (problem, token) => {
  const url = `${import.meta.env.VITE_API_URL}/problems/${problem}`;
  console.log(problem);
  const dataStatus = {
  problem_status: "Resuelto",
  };

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataStatus),
  });

  const json = await response.json();

  console.log(json.data);

  return json;
};
