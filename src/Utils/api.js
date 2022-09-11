import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemonById = (id) => {
  return pokeApi.get(`/pokemon/${id}`).then(({ data }) => {
    return data;
  });
};
