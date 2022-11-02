import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { CharacterDTO } from '@/apptypes'
import { GET_ALL_CHARACTERS} from '@/infrastructure/services/api/queries'
import { characterMapper } from '@/infrastructure/services/mappers/characterMapper'
import { Card, Header, Spinner } from '@/ui/components'

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const { loading, data } = useQuery(GET_ALL_CHARACTERS)

  useEffect(() => {
    if (data) {
      const { allPeople: { people } } = data
      setCharacters(people)
    }
  }, [data])

  return (
    <main>
      <Header title="SWApi List" />
      {loading && <Spinner />}
      {characters.map((character: CharacterDTO) => <Card character={characterMapper(character)} key={character.id} />)}
    </main>
  )
}

export default CharacterList