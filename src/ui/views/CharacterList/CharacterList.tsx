import { useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { GET_ALL_CHARACTERS} from '@/infrastructure/services/api/queries'

const CharacterList = () => {

  const { loading, data } = useQuery(GET_ALL_CHARACTERS)

  useEffect(() => {
    if (data) console.log(data)
  }, [data])

  return (
    <main>
      {loading ? <p>Loading data...</p> : <p>Characters loaded</p>}
    </main>
  )
}

export default CharacterList