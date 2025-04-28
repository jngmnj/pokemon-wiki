import { fetchPokemonList } from "@/store/thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
  const { pokemons, loading } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  if (loading) {
    return <div>로딩중...</div>;
  }
  if (pokemons.length === 0) {
    return <div>No Pokemon found</div>;
  }
  return (
    <>
      <div className="flex flex-wrap">
        {pokemons.map((pokemon, index) => (
          <div key={index} className="">
            <h2>{pokemon.name}</h2>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
