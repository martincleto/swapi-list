import { Link } from 'react-router-dom'

import { StyledHeader, StyledHeaderContent } from './Header.style'

interface HeaderProps {
  children?: React.ReactNode;
  navigation?: {
    label: string;
    path: string;
  };
  title: string,
}

const Header: React.FC<HeaderProps> = ({ children, navigation, title }) => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <h1>{title}</h1>
        {children}
        {navigation && (
          <nav>
            <Link to={navigation.path}>{navigation.label}</Link>
          </nav>
        )}
      </StyledHeaderContent>
    </StyledHeader>
  )
}

export default Header