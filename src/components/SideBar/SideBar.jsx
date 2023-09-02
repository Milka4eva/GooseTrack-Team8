import { useNavigate } from 'react-router-dom';

import {
  SideBarContainer,
  SideBarHeaderWrapper,
  SideBarLogo,
  SideBarTitleSpan,
  SideBarTitle,
  SideBarLogoWrapper,
  SideBarCloseBtn,
  NavigationWraper,
  NavigationTitle,
  NavigationButton,
  NavigationButtonLink,
  NavigationButtonTitle,
  NavigationItem,
  LogOutBtn,
  LogOutBtnTitle,
} from './SideBar.styled';
import logo from '../../images/Icons/goose-logo-m.png';
import closeIcon from '../../images/Icons/close-menu-button.svg';
import calendarCheckIcon from '../../images/Icons/calendar-check-black.svg';
import userCheckIcon from '../../images/Icons/user-check-black.svg';
import statisticsIcon from '../../images/Icons/statistics.svg';
import logoutIcon from '../../images/Icons/log-out-button.svg';
import { Suspense } from 'react';

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <SideBarContainer>
        <SideBarHeaderWrapper>
          <SideBarLogoWrapper>
            <SideBarLogo src={logo} width="36" alt="Goose logo" />
            <SideBarTitle>
              G<SideBarTitleSpan>oo</SideBarTitleSpan>seTrack
            </SideBarTitle>
            <SideBarCloseBtn>
              <svg width={24} height={24} alt={'close menu'}>
                <use href={closeIcon + '#close-menu-button'}></use>
              </svg>
            </SideBarCloseBtn>
          </SideBarLogoWrapper>
        </SideBarHeaderWrapper>

        <NavigationWraper>
          <NavigationTitle>User Panel</NavigationTitle>
          <ul>
            <NavigationItem>
              <NavigationButton>
                <svg width={24} height={24} alt={'user'}>
                  <use href={userCheckIcon + '#user-check-black'}></use>
                </svg>
                <NavigationButtonLink href={'#'}>
                  <NavigationButtonTitle>My account</NavigationButtonTitle>
                </NavigationButtonLink>
              </NavigationButton>
            </NavigationItem>

            <NavigationItem>
              <NavigationButton>
                <svg width={24} height={24} alt={'calendar'}>
                  <use href={calendarCheckIcon + '#calendar-check-black'}></use>
                </svg>
                <NavigationButtonLink href={'#'}>
                  <NavigationButtonTitle>Calendar</NavigationButtonTitle>
                </NavigationButtonLink>
              </NavigationButton>
            </NavigationItem>

            <NavigationItem>
              <NavigationButton>
                <svg width={24} height={24} alt={'statistics'}>
                  <use href={statisticsIcon + '#statistics'}></use>
                </svg>
                <NavigationButtonLink href={'#'}>
                  <NavigationButtonTitle>Statistics</NavigationButtonTitle>
                </NavigationButtonLink>
              </NavigationButton>
            </NavigationItem>
          </ul>
        </NavigationWraper>

        <LogOutBtn onClick={() => navigate('login')}>
          <LogOutBtnTitle>Log out</LogOutBtnTitle>
          <svg width={20} height={20} alt={'logout'}>
            <use href={logoutIcon + '#logout'}></use>
          </svg>
        </LogOutBtn>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
