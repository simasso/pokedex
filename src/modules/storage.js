/**
 * Key of storage item for pokemon data array
 */
const POKEMONS = 'Pokemons';

/**
 * Class holding pokemon data to be stored (only data displayed on Pokedex site)
 */
export class Pokemon {
  id;
  name;
  img;
  hp;
  attack;
  defense;
  notes;
  constructor(data, notes = '') {
    this.id = data.id;
    this.name = data.name;
    this.img = data.sprites.other.dream_world.front_default;
    this.hp = data.stats[0].base_stat;
    this.attack = data.stats[0].base_stat;
    this.defense = data.stats[0].base_stat;
    this.notes = notes;
  }
}

/**
 * Adds data to storage item @POKEMONS
 * @param {Pokemon} data
 */
export function storePokemon(data) {
  const pokemons = loadStorage();
  pokemons.push(new Pokemon(data));
  writeStorage(pokemons);
}

/**
 * Deletes pokemon with given ID from storage item @POKEMONS
 * If deleted pokemon was the last, item @POKEMONS is deleted from storage
 * @param {Number} id ID of pokemon to delete
 */
export function deletePokemon(id) {
  let pokemons = loadStorage();
  pokemons = pokemons.filter((pokemon) => pokemon.id !== id);
  pokemons.length > 0
    ? writeStorage(pokemons)
    : localStorage.removeItem(POKEMONS);
}

/**
 * Reurns true if pokemon with given ID exists in storage item @POKEMONS , false otherwise
 * @param {Number} id ID of pokemon to delete
 */
export function isStored(id) {
  return loadStorage().find((pokemon) => pokemon.id === id);
}

/**
 * @returns Returns array on pokemon data stored in storage item @POKEMONS
 */
export function loadStorage() {
  return JSON.parse(localStorage.getItem(POKEMONS)) ?? [];
}

/**
 * Stores given array of pokemon data in storage item @POKEMONS
 * @param {Pokemon[]} pokemons Array of pokemon data to be stored
 */
export function writeStorage(pokemons) {
  localStorage.setItem(POKEMONS, JSON.stringify(pokemons));
}
