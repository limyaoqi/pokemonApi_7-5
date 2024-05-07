import axios from "axios";

const API_URL = "http://localhost:5000";

/* 
    INSTRUCTION: 
    - Create a function to fetch pokemons from the API. 
    - API call may include query parameters for search and type.
*/

export const getPoke = async (search, type) => {
  let params = {
    search: search,
  };
  if (type !== "all") {
    params.type = type;
  }

  const queries = new URLSearchParams(params);
  const response = await axios.get(API_URL + "/pokemons?" + queries.toString());
  return response.data;
};

/* INSTRUCTION: Create a function to fetch types from the API. */
export const getTypes = async () => {
  const response = await axios.get(API_URL + "/types");
  return response.data;
};
