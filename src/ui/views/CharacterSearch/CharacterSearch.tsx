import { useApp } from '@/ui/context/AppContext'

import { Character } from '@/apptypes'
import stormtrooper from '@/ui/assets/images/stormtrooper.png'
import { Card, Header } from '@/ui/components'

const CharacterSearch = () => {
  const { characters } = useApp()

  const headerProps = {
    navigation: {
      label: 'Go to Media',
      path: '/list',
    },
    title: 'SW Search',
  }

  return (
    <main>
      <Header {...headerProps} />
      {!!characters?.length
        ? characters.map((character: Character) => <Card character={character} key={character.id} />)
        : <p className='no-results'><img src={stormtrooper} alt="Stormtrooper" />These aren't the droids you're looking for.</p>
      }
      {characters?.map((character: Character) => <Card character={character} key={character.id} />)}
    </main>
  )
}

export default CharacterSearch