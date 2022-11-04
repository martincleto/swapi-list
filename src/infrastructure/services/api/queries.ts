import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS = gql`
  query getAllCharacters {
    allPeople {
      people {
        id
        birthYear
        name
        species {
          name
        }
        homeworld {
          name
        }
      }
    }
  }
`
