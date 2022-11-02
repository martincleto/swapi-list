export interface Character {
  birthYear: string;
  homeworld: string;
  id: string;
  name: string;
  species: string;
}

export interface CharacterDTO extends Omit<Character, 'homeworld' | 'species'> {
  homeworld: {
    name: string;
  }
  id: string;
  name: string;
  species: {
    name: string;
  }
}
