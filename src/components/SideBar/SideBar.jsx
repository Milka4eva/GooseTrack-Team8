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
  CloseBtnSvg,
} from './SideBar.styled';
import logo from '../../images/Icons/goose-logo-m.png';
import logoutIcon from '../../images/Icons/log-out-button.svg';
import icon from '../../images/sideBar.svg';
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
                  <CloseBtnSvg >
                    <use href={icon + '#close-menu'}></use>
                  </CloseBtnSvg>
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
                      <use href={icon + '#user'}></use>
                    </SvgNav>

                    <NavigationButtonTitle>My account</NavigationButtonTitle>
                  </NavigationButton>
                </NavigationButtonLink>
              </NavigationItem>

              <NavigationItem>
                <NavigationButtonLink to="calendar">
                  <NavigationButton>
                    <SvgNav>
                      <use href={icon + '#calendar'}></use>
                    </SvgNav>

                    <NavigationButtonTitle>Calendar</NavigationButtonTitle>
                  </NavigationButton>
                </NavigationButtonLink>
              </NavigationItem>

              <NavigationItem>
                <NavigationButtonLink to="statistics">
                  <NavigationButton>
                    <SvgNav>
                      <use href={icon + '#statistics'}></use>
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
          <LogOutBtnSvg>
            <use href={logoutIcon + '#logout'}></use>
          </LogOutBtnSvg>
        </LogOutBtn>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
