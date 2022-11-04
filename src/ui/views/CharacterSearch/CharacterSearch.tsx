import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'

import { Character, CharacterDTO } from '@/apptypes'
import { GET_ALL_CHARACTERS } from '@/infrastructure/services/api/queries'
import { characterMapper } from '@/infrastructure/services/mappers/characterMapper'
import { useApp } from '@/ui/context/AppContext'
import stormtrooper from '@/ui/assets/images/stormtrooper.png'
import { Card, Header, Search } from '@/ui/components'

import { StyledCharacterSearch, StyledFilters } from './CharacterSearch.style'

const CharacterSearch = () => {
  const { characters } = useApp()
  const [currentCharacters, setCurrentCharacters] = useState(characters)
  const [fetchCharacters, { data }] = useLazyQuery(GET_ALL_CHARACTERS)

  // @TODO refactor to avoid duplicated logic in the views
  useEffect(() => {
    if (!currentCharacters?.length) fetchCharacters()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCharacters])

  useEffect(() => {
    if (data) {
      const { allPeople: { people } } = data
      const normalizedCharacters = people.map((character: CharacterDTO) => characterMapper(character))
      setCurrentCharacters(normalizedCharacters)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleOnSearch = (algo: string) => {
    console.log(algo)
  }

  const headerProps = {
    navigation: {
      label: 'Go to Media',
      path: '/list',
    },
    title: 'SW Search',
  }

  return (
    <StyledCharacterSearch>
      <Header {...headerProps}>
        <StyledFilters>
          <Search placeholder="Type here to filter by name" onSearch={handleOnSearch}/>
        </StyledFilters>
      </Header>
      {!!currentCharacters?.length
        ? currentCharacters.map((character: Character) => <Card character={character} key={character.id} />)
        : <p className='no-results'><img src={stormtrooper} alt="Stormtrooper" />These aren't the droids you're looking for.</p>
      }
    </StyledCharacterSearch>
  )
}

export default CharacterSearch