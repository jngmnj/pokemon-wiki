import { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import { TYPE_COLORS } from '@/styles/typecolor';

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  const fetchPokemonData = async () => {
    const response = await axios.get(url);
    const data = response.data;
    console.log(response.data);
    const pokemonData = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map((type) => type.type.name),
      fontImgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
      backImgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png`,
    };
    setPokemon(pokemonData);
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);
  if (!pokemon) return null;

  if (pokemon) console.log('포켓몬', pokemon);

  return (
    <Link to={`/detail/${pokemon.id}`} className="">
      <div className="bg-gray-100 rounded-xl p-2">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`}
          alt={pokemon.name}
          className="mx-auto"
        />
      </div>
      <p className="text-[10px] text-gray-600">
        #{pokemon.id.toString().padStart(5, '0000')}
      </p>
      <p className="text-xl py-1">{pokemon.name}</p>
      <div className="flex gap-1">
        {pokemon.types.map((type, index) => {
          const color = TYPE_COLORS[type] || '#777';
          return (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className={`text-white rounded-md px-2 py-1 text-xs`}
            >
              {type}
            </span>
          );
        })}
      </div>
    </Link>
  );
};

export default PokemonCard;
