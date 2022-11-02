import { Character } from '@/apptypes'
import { StyledCard } from './Card.style'

interface CardProps {
  character: Character;
}

const Card: React.FC<CardProps> = ({ character }) => {
  const { birthYear, homeworld, name, species } = character

  return (
    <StyledCard>
      <h2 className="card__title">{name}</h2>
      <ul className="card__content">
        <li className="card__item">Birth Year: <em>{birthYear}</em></li>
        <li className="card__item">Homeworld: <em>{homeworld}</em></li>
        <li className="card__item">Species: <em>{species}</em></li>
      </ul>
    </StyledCard>
  )
}

export default Card