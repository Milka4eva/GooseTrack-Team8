import styled from 'styled-components';

export const SideBarContainer = styled.div`
  max-width: 225px;
  padding: 24px 20px;

  @media (min-width: 768px) {
    padding: 32px 24px;
  }

  @media (min-width: 1440px) {
    padding: 24px 32px;
  }
`;

export const SideBarHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideBarLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

export const SideBarLogo = styled.img`
  display: block;
  height: 100%;
`;

export const SideBarTitle = styled.p`
  font-family: Inter;
  font-weight: 700;
  font-size: 16px;
  color: #3e85f3;
  margin-right: 30px;
`;

export const SideBarTitleSpan = styled.span`
  font-style: italic;
`;

export const SideBarCloseBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const NavigationWraper = styled.div`
  max-width: 185px;
  border: 1px solid black;
`;

export const NavigationItem = styled.li`
  margin-bottom: 18px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const NavigationTitle = styled.p`
  color: rgba(52, 52, 52, 0.5);
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 24px;
`;

export const NavigationButtonLink = styled.a`
  text-decoration: none;
  margin-left: 10px;
`;

export const NavigationButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  padding: 10px 12px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #e3f3ff;
  }
`;

export const NavigationButtonTitle = styled(NavigationTitle)`
  font-size: 14px;
  margin-bottom: 0;
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  min-width: 141px;
  padding: 16px 23px;
  border: none;
  border-radius: 16px;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  cursor: pointer;
`;
export const LogOutBtnTitle = styled.p`
  color: #ffffff;
  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
  margin-right: 10px;
`;
