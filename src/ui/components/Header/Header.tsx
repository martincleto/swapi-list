import { StyledHeader } from './Header.style'

interface HeaderProps {
  children?: React.ReactNode;
  title: string,
}

const Header: React.FC<HeaderProps> = ({ children, title }) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      {children}
    </StyledHeader>
  )
}

export default Header