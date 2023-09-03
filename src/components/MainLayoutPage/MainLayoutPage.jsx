import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import useAuth from 'hooks/useAuth';
import {
  MainContainer,
  SideBarContainer,
  SuBContainer,
  HeaderContainer,
} from './MainLayoutPage.styled';
import Loader from 'components/Loader/Loader';

const MainLayoutPage = () => {
  const [sideBar, setSideBar] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  const closeSideBar = value => {
    setSideBar(value);
  };

  return (
    <MainContainer>
      <SuBContainer>
        <HeaderContainer>
          <Header
            sideStatus={closeSideBar}
            userInfo={user}
            namePage={location.pathname}
          />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </HeaderContainer>

        <SideBarContainer $sideBar={sideBar ? 'block' : 'none'}>
          <SideBar sideStatus={closeSideBar} />
        </SideBarContainer>
      </SuBContainer>
    </MainContainer>
  );
};

export default MainLayoutPage;
