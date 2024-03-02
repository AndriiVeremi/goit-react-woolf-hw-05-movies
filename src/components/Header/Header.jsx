import { NavLink } from 'react-router-dom';
import { HeaderWrapper, HeaderMenuList, HeaderMenuItem } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderMenuList>
        <HeaderMenuItem>
          <NavLink to="/">Home</NavLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <NavLink to="/movies">Movies</NavLink>
        </HeaderMenuItem>
      </HeaderMenuList>
    </HeaderWrapper>
  );
};

export default Header;
