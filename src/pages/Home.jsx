import PokemonList from "@/components/common/pokemon/PokemonList";
import { fetchPokemonList } from "@/store/thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { pokemons, loading } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (pokemons.length === 0) return <div>No Pokemon found</div>;

  return <PokemonList pokemons={pokemons} />;
};

export default Home;
