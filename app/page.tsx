import { gql } from '@apollo/client';
import Link from 'next/link';
import PokeCard from '../components/PokeCard';
import client from '../lib/apollo';
import Pokemon from '../types/pokemon';

const fetchData = async (offset: number = 0) => {
  //SPRITE: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
  const { data } = await client.query({
    query: gql`
      query getPokemonData {
        pokemon: pokemon_v2_pokemon(limit: 15, order_by: { id: asc }, offset:${offset}) {
          id
          name
          types: pokemon_v2_pokemontypes {
            type: pokemon_v2_type {
              name
            }
          }
        }
      }
    `,
  });

  return data;
};

export default async function Home({
  searchParams,
}: {
  searchParams: { offset: string };
}) {
  const offset = Number(searchParams.offset) || 0;
  const { pokemon } = await fetchData(offset);

  return (
    <div className='min-h-screen'>
      {/* header */}
      <div className='flex justify-center items-center'>
        <h1 className='text-5xl text-yellow-300 drop-shadow-title tracking-wide mt-4 font-pokemon'>
          {`Gotta catch em' All!`}
        </h1>
      </div>

      {/* main area with the poke-cards */}
      <main className='flex flex-wrap justify-center items-center p-6 mt-4'>
        {pokemon.map((pokemon: Pokemon) => (
          <div
            className='p-4'
            key={pokemon.id}>
            <PokeCard pkmn={pokemon} />
          </div>
        ))}
      </main>

      {/* get next 15 pkmn */}
      <div className='flex justify-center items-center'>
        <Link
          href={`/?offset=${offset - 15}`}
          className={`
          bg-yellow-300 
          text-neutral-900 
            font-bold py-1 px-2 mx-2 
            rounded-md hover:bg-yellow-400
            ${offset === 0 ? 'hidden' : ''}
        `}>
          {`Load Less`}
        </Link>

        <Link
          href={`/?offset=${offset + 15}`}
          className='bg-yellow-300 text-neutral-900 font-bold py-1 px-2 mx-2 rounded-md hover:bg-yellow-400'>
          {`Load More`}
        </Link>
      </div>

      {/* fixed footer */}
      <footer className='w-full flex justify-between items-center p-8 bg-neutral-900 border-neutral-200'>
        <span className='text-xs font-bold text-neutral-100'>
          Pokemon is a trademark of Nintendo GameFreak. This project is for
          education purposes only!
        </span>

        <div className='flex flex-col justify-center'>
          <span className='text-xs font-bold text-neutral-100'>
            Made with ❤️ by{' '}
            <a
              href='https://rafaeldev.me'
              target='_blank'
              rel='noreferrer'
              className='underline'>
              @rafaelsilva81
            </a>
          </span>

          <span className='text-xs font-bold text-neutral-100'>
            Built with{' '}
            <a
              href='https://pokeapi.co/'
              target='_blank'
              rel='noreferrer'
              className='underline'>
              pokeApi
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
