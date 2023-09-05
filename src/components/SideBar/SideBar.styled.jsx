import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.div`
  max-width: 225px;
  padding: 24px 20px;
  background-color: #fff;
  height: 812px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    max-width: 289px;
    padding: 32px 24px;
    height: 1024px;
  }
  @media (min-width: 1440px) {
    height: 900px;
  }
`;

export const SideBarWrapper = styled.div``;
export const SideBarHeaderWrapper = styled.div``;

export const SideBarLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

export const SideBarLogo = styled.img`
  width: 36px;
  height: 35px;
  @media (min-width: 768px) {
    width: 60px;
    height: 58px;
  }
  @media (min-width: 1440px) {
    width: 71px;
    height: 68px;
  }
`;

export const SideBarTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #3e85f3;
  margin-right: 25px;
  margin-left: 6px;
  line-height: 22px;
  @media (min-width: 768px) {
    line-height: 28px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
    margin-left: 10px;
  }
`;

export const SideBarTitleSpan = styled.span`
  font-style: italic;
`;

export const SideBarCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;
export const CloseBtnSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #343434;
  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;
export const NavigationWraper = styled.div``;

export const NavigationItem = styled.li`
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const NavigationButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  height: 40px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #e3f3ff;
  }
  @media (min-width: 768px) {
    height: 56px;
  }
`;

export const NavigationTitle = styled.p`
  color: rgba(52, 52, 52, 0.5);
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 24px;
  ${NavigationButton}:hover & {
    color: #3e85f3;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const SvgNav = styled.svg`
  width: 20px;
  height: 20px;
  stroke: rgba(52, 52, 52, 0.5);
  fill: rgba(52, 52, 52, 0.5);

  ${NavigationButton}:hover & {
    stroke: rgba(62, 133, 243, 1);
    fill: rgba(62, 133, 243, 1);
  }
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const NavigationButtonLink = styled(Link)`
  text-decoration: none;
`;

export const NavigationButtonTitle = styled(NavigationTitle)`
  margin-bottom: 0;
  margin-left: 8px;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 131px;
  height: 46px;
  border: none;
  border-radius: 16px;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  cursor: pointer;
  &:hover {
    background: #2b78ef;
  }
  @media (min-width: 768px) {
    width: 141px;
    height: 56px;
  }
`;

export const LogOutBtnTitle = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  margin-right: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const LogOutBtnSvg = styled.svg`
  width: 18px;
  height: 18px;
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
