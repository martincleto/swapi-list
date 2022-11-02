import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'

import { Character, CharacterDTO } from '@/apptypes'
import { GET_ALL_CHARACTERS} from '@/infrastructure/services/api/queries'
import { characterMapper } from '@/infrastructure/services/mappers/characterMapper'
import { useApp } from '@/ui/context/AppContext'
import { Card, Header, Spinner } from '@/ui/components'

const CharacterList = () => {
  const [fetchCharacters, { loading, data }] = useLazyQuery(GET_ALL_CHARACTERS)

  const { characters, setCharacters } = useApp()

  const headerProps = {
    navigation: {
      label: 'Go to Search',
      path: '/search',
    },
    title: 'SW Media',
  }

  useEffect(() => {
    if (!characters?.length) fetchCharacters()
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
    <main>
      <Header {...headerProps} />
      {loading && <Spinner />}
      {characters?.map((character: Character) => <Card character={character} key={character.id} />)}
    </main>
  )
}

export default CharacterList