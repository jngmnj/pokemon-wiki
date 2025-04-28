import PokemonCard from '@/components/common/pokemon/PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-5">
      {pokemons.map((data, index) => (
        <PokemonCard key={index} url={data.url} />
      ))}
    </div>
  );
};

export default PokemonList;
