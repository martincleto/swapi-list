import { Character } from '@/apptypes'
import { StyledCard } from './Card.style'

interface CardProps {
  character: Character;
}

const Card: React.FC<CardProps> = ({ character }) => {
  const { birthYear, homeworld, name, species } = character

  return (
    <StyledCard>
      <h2>{name}</h2>
      <ul>
        <li>Birth Year: <em>{birthYear}</em></li>
        <li>Homeworld: <em>{homeworld}</em></li>
        <li>Species: <em>{species}</em></li>
      </ul>
    </StyledCard>
  )
}

export default Card