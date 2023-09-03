import { useMediaQuery } from '@chakra-ui/react';

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
  SideBarWrapper,
  SvgNav,
  LogOutBtnSvg,
} from './SideBar.styled';
import logo from '../../images/Icons/goose-logo-m.png';
import closeIcon from '../../images/Icons/close-menu-button.svg';
import calendarCheckIcon from '../../images/Icons/calendar-check-black.svg';
import userCheckIcon from '../../images/Icons/user-check-black.svg';
import statisticsIcon from '../../images/Icons/statistics.svg';
import logoutIcon from '../../images/Icons/log-out-button.svg';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';

const SideBar = props => {
  const dispatch = useDispatch();
  const [isHidenCloseButton] = useMediaQuery('(min-width: 1440px)');

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <SideBarContainer>
        <SideBarWrapper>
          <SideBarHeaderWrapper>
            <SideBarLogoWrapper>
              <SideBarLogo src={logo} alt="Goose logo" />
              <SideBarTitle>
                G<SideBarTitleSpan>oo</SideBarTitleSpan>seTrack
              </SideBarTitle>
              {!isHidenCloseButton && (
                <SideBarCloseBtn onClick={() => props.sideStatus(false)}>
                  <svg width={24} height={24} alt={'close menu'}>
                    <use href={closeIcon + '#close-menu-button'}></use>
                  </svg>
                </SideBarCloseBtn>
              )}
            </SideBarLogoWrapper>
          </SideBarHeaderWrapper>
          <NavigationWraper>
            <NavigationTitle>User Panel</NavigationTitle>
            <ul>
              <NavigationItem>
                <NavigationButtonLink to="account">
                  <NavigationButton>
                    <SvgNav alt={'user'}>
                      <use href={userCheckIcon + '#user-check-black'}></use>
                    </SvgNav>

                    <NavigationButtonTitle>My account</NavigationButtonTitle>
                  </NavigationButton>
                </NavigationButtonLink>
              </NavigationItem>

              <NavigationItem>
                <NavigationButtonLink to="calendar">
                  <NavigationButton>
                    <SvgNav alt={'calendar'}>
                      <use
                        href={calendarCheckIcon + '#calendar-check-black'}
                      ></use>
                    </SvgNav>

                    <NavigationButtonTitle>Calendar</NavigationButtonTitle>
                  </NavigationButton>
                </NavigationButtonLink>
              </NavigationItem>

              <NavigationItem>
                <NavigationButtonLink to="statistics">
                  <NavigationButton>
                    <SvgNav alt={'statistics'}>
                      <use href={statisticsIcon + '#statistics'}></use>
                    </SvgNav>

                    <NavigationButtonTitle>Statistics</NavigationButtonTitle>
                  </NavigationButton>
                </NavigationButtonLink>
              </NavigationItem>
            </ul>
          </NavigationWraper>
        </SideBarWrapper>

        <LogOutBtn onClick={handleLogOut}>
          <LogOutBtnTitle>Log out</LogOutBtnTitle>
          <LogOutBtnSvg alt={'logout'}>
            <use href={logoutIcon + '#logout'}></use>
          </LogOutBtnSvg>
        </LogOutBtn>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
