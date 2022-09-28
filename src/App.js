import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import ListAllPokemon from "./Components/ListAllPokemon";
import PokemonTypesList from "./Components/PokemonTypesList";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <PokemonTypesList />
      <ListAllPokemon />
    </>
  );
}

export default App;
