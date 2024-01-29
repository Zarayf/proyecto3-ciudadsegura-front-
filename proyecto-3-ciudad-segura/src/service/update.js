export const update = async (problem, token) => {
  const url = `${
    import.meta.env.VITE_API_URL
  }/problems/${problem}`;

  const response = await fetch(url,
  {
        method: 'PUT',
        headers:{
            authorization: token
        }
    });

  const json = await response.json();

  console.log(json);

  return json.data;
};
