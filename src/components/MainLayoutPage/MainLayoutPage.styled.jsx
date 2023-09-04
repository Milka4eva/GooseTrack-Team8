import styled from 'styled-components';

export const MainContainer = styled.div`
  background: ${({ theme }) => theme.bgColors.mainLayout};
  height: 100vh;
  @media (min-width: 1440px) {
  }
`;
export const SuBContainer = styled.div`
  // outline: 1px solid red;
  position: relative;

  max-width: 335px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    max-width: 704px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
`;
export const HeaderContainer = styled.div`
  padding-top: 24px;

  @media (min-width: 1440px) {
    width: 1151px;
    height: 100%;
    margin: 0 32px;
    padding-top: 41px;
  }
`;
export const SideBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: ${props => props.$sideBar};
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    position: relative;
    display: block;
  }
`;
