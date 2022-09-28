import axios from "axios";

// Base URL for Axios to use
const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

// Get all Pokemon Types
export const getAllTypes = () => {
  return pokeApi.get(`/type`).then(({ data }) => {
    return data.results;
  });
};
