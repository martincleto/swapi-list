import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'

import { Character, CharacterDTO } from '@/apptypes'
import { FILTER_DEBOUNCE_TIME } from '@/config'
import { GET_ALL_CHARACTERS } from '@/infrastructure/services/api/queries'
import { characterMapper } from '@/infrastructure/services/mappers/characterMapper'
import stormtrooper from '@/ui/assets/images/stormtrooper.png'
import { useApp } from '@/ui/context/AppContext'
import useFilters from '@/ui/hooks/useFilters'
import { debounce, filterByKey } from '@/ui/util'
import { Card, Header, Search } from '@/ui/components'

import { StyledCharacterSearch, StyledFilters } from './CharacterSearch.style'

const CharacterSearch = () => {
  const { characters, setCharacters } = useApp()
  const [fetchCharacters, { data }] = useLazyQuery(GET_ALL_CHARACTERS)
  const { models, operations } = useFilters()
  
  const headerProps = {
    navigation: {
      label: 'Go to Media',
      path: '/list',
    },
    title: 'SW Search',
  }

  const updateSearchFilter = (match?: string) => {
    const payload = match
      ? filterByKey({
        key: 'name',
        match,
        source: characters as never[]
      })
      : characters
    operations.updateFilter('search', payload as Character[])
  }

  const handleOnSearch = (match: string) => {
    debounce(() => {
      updateSearchFilter(match)
    }, FILTER_DEBOUNCE_TIME)
  }

  useEffect(() => {
    if (!characters?.length) {
      fetchCharacters()
    } else {
      updateSearchFilter()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characters])

  useEffect(() => {
    if (data) {
      const { allPeople: { people } } = data
      const normalizedCharacters = people.map((character: CharacterDTO) => characterMapper(character))
      setCharacters && setCharacters(normalizedCharacters)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <StyledCharacterSearch>
      <Header {...headerProps}>
        <StyledFilters>
          <Search placeholder="Type here to filter by name" onSearch={handleOnSearch}/>
        </StyledFilters>
      </Header>
      {!!models.filters.search?.length
        ? models.filters.search.map((character: Character) => <Card character={character} key={character.id} />)
        : <p role="complementary"><img src={stormtrooper} alt="Stormtrooper" />These aren't the droids you're looking for.</p>
      }
    </StyledCharacterSearch>
  )
}

export default CharacterSearch