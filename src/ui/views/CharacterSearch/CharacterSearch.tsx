import { Header } from '@/ui/components'

const CharacterSearch = () => {

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
    </main>
  )
}

export default CharacterSearch