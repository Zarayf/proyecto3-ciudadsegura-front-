export const getProblemCompleteService = async () => {
    const url = `${
      import.meta.env.VITE_API_URL
    }/problems/list`;
    console.log("servicio línea 5");
    const response = await fetch(url);
  
    const json = await response.json();
  
    console.log("get Jason data");
  
    return json.data;
  };