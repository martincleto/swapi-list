import { Link } from 'react-router-dom'

import { StyledHeader } from './Header.style'

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
      <h1 className='header__title'>{title}</h1>
      {children}
      {navigation && (
        <nav className='header__navigation'>
          <Link className='header__navigation-link' to={navigation.path}>
            {navigation.label}
          </Link>
        </nav>
      )}
    </StyledHeader>
  )
}

export default Header