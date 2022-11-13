import Image from 'next/image';
import React from 'react';
import Pokemon from '../types/pokemon';
import PokemonType from '../types/pokemon-type';

interface Colors {
  // not really the best way to solve this but it will do
  [key: string]: string;
}

const colors: Colors = {
  normal: 'bg-normal',
  fire: 'bg-fire',
  water: 'bg-water',
  electric: 'bg-electric',
  grass: 'bg-grass',
  ice: 'bg-ice',
  fighting: 'bg-fighting',
  poison: 'bg-poison',
  ground: 'bg-ground',
  flying: 'bg-flying',
  psychic: 'bg-psychic',
  bug: 'bg-bug',
  rock: 'bg-rock',
  ghost: 'bg-ghost',
  dragon: 'bg-dragon',
  dark: 'bg-dark',
  steel: 'bg-steel',
  fairy: 'bg-fairy',
} as const;

const PokeCard = (props: { pkmn: Pokemon }) => {
  const { pkmn } = props;
  return (
    <div
      className='flex flex-col justify-between bg-neutral-200 h-52 w-48 rounded-md shadow-lg cursor-pointer'
      key={pkmn.id}>
      <div className='flex flex-col justify-center items-center h-full mb-3'>
        <Image
          width={100}
          height={100}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn.id}.png`}
          alt={pkmn.name}
        />
        <h2 className='text-xl text-yellow-300 drop-shadow-title tracking-[0.15em] font-pokemon capitalize'>
          {pkmn.name}
        </h2>
      </div>
      <div className='flex flex-wrap justify-between items-end w-full'>
        {pkmn.types.map(({ type }: PokemonType, index: number) => (
          <div
            className={`flex justify-center items-center h-8 flex-1 ${
              colors[type.name]
            } ${
              pkmn.types.length === 1
                ? 'rounded-b-md'
                : index === 0
                ? 'rounded-bl-md'
                : index === pkmn.types.length - 1
                ? 'rounded-br-md'
                : ''
            }`}
            key={index}>
            <span className='text-neutral-800 font-bold text-md uppercase drop-shadow-white font-inter'>
              {type.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeCard;
