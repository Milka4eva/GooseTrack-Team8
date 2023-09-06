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
  NavigationButtonLink,
  NavigationItem,
  LogOutBtn,
  LogOutBtnTitle,
  SideBarWrapper,
  LogOutBtnSvg,
  CloseBtnSvg,
  NavigationButtonAcc,
  NavigationButtonStat,
  NavigationButtonCalen,
  NavigationButtonTitleAcc,
  NavigationButtonTitleCalen,
  NavigationButtonTitleStat,
  SvgNavAcc,
  SvgNavCalen,
  SvgNavStat,
} from './SideBar.styled';
import logo from '../../images/Icons/goose-logo-m.png';
import logoutIcon from '../../images/Icons/log-out-button.svg';
import icon from '../../images/sideBar.svg';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { useLocation } from 'react-router-dom';

const SideBar = props => {
  const dispatch = useDispatch();
  const location = useLocation();
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
                  <CloseBtnSvg>
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
                  <NavigationButtonAcc
                    $loca={
                      location.pathname === '/account'
                        ? ({ theme }) => theme.bgColors.hoverSideBarBg
                        : ({ theme }) => theme.bgColors.sideBarBg
                    }
                  >
                    <SvgNavAcc
                      $loca={
                        location.pathname === '/account'
                          ? ({ theme }) =>
                              theme.textColors.hoverSidebarTextButton
                          : ({ theme }) => theme.textColors.sidebarTextButton
                      }
                    >
                      <use href={icon + '#user'}></use>
                    </SvgNavAcc>

                    <NavigationButtonTitleAcc
                      $loca={
                        location.pathname === '/account'
                          ? ({ theme }) =>
                              theme.textColors.hoverSidebarTextButton
                          : ({ theme }) => theme.textColors.sidebarTextButton
                      }
                    >
                      My account
                    </NavigationButtonTitleAcc>
                  </NavigationButtonAcc>
                </NavigationButtonLink>
              </NavigationItem>

              <NavigationItem>
                <NavigationButtonLink to="calendar">
                  <NavigationButtonCalen
                    $loca={
                      location.pathname.includes('/calendar')
                        ? ({ theme }) => theme.bgColors.hoverSideBarBg
                        : ({ theme }) => theme.bgColors.sideBarBg
                    }
                  >
                    <SvgNavCalen
                      $loca={
                        location.pathname.includes('/calendar')
                          ? ({ theme }) =>
                              theme.textColors.hoverSidebarTextButton
                          : ({ theme }) => theme.textColors.sidebarTextButton
                      }
                    >
                      <use href={icon + '#calendar'}></use>
                    </SvgNavCalen>

                    <NavigationButtonTitleCalen
                      $loca={
                        location.pathname.includes('/calendar')
                          ? ({ theme }) =>
                              theme.textColors.hoverSidebarTextButton
                          : ({ theme }) => theme.textColors.sidebarTextButton
                      }
                    >
                      Calendar
                    </NavigationButtonTitleCalen>
                  </NavigationButtonCalen>
                </NavigationButtonLink>
              </NavigationItem>

              <NavigationItem>
                <NavigationButtonLink to="statistics">
                  <NavigationButtonStat
                    $loca={
                      location.pathname === '/statistics'
                        ? ({ theme }) => theme.bgColors.hoverSideBarBg
                        : ({ theme }) => theme.bgColors.sideBarBg
                    }
                  >
                    <SvgNavStat
                      $loca={
                        location.pathname === '/statistics'
                          ? ({ theme }) =>
                              theme.textColors.hoverSidebarTextButton
                          : ({ theme }) => theme.textColors.sidebarTextButton
                      }
                    >
                      <use href={icon + '#statistics'}></use>
                    </SvgNavStat>

                    <NavigationButtonTitleStat
                      $loca={
                        location.pathname === '/statistics'
                          ? ({ theme }) =>
                              theme.textColors.hoverSidebarTextButton
                          : ({ theme }) => theme.textColors.sidebarTextButton
                      }
                    >
                      Statistics
                    </NavigationButtonTitleStat>
                  </NavigationButtonStat>
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
