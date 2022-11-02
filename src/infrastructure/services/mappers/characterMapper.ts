import { Character, CharacterDTO } from "@/apptypes"
import { DEFAULT_SPECIES } from "@/config"


export const characterMapper = ({
  birthYear,
  homeworld,
  id,
  name,
  species,
}: CharacterDTO): Character => ({
  birthYear,
  homeworld: homeworld.name,
  id,
  name,
  species: species ? species.name : DEFAULT_SPECIES,
})