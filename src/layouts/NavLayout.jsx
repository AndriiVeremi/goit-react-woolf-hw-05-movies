import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Wrapper, WrapperOutlet } from './NavLayout.styled';

const NavLayout = () => {
  return (
    <Wrapper>
      <Header />
      <WrapperOutlet>
      <Outlet />
      </WrapperOutlet>
    </Wrapper>
  );
};

export default NavLayout;
