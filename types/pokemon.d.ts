import PokemonType from './pokemon-type';

declare interface Pokemon {
  id: number;
  name: string;
  types: Array<PokemonType>;
}

export default Pokemon;
