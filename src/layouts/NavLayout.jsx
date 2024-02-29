import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

const NavLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default NavLayout;
