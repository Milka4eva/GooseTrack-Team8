import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 32px;
  max-width: 335px;
  background: ${({ theme }) => theme.bgColors.mainLayout};
  margin-bottom: 64px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    max-width: 704px;
    height: 44px;
  }
  @media (min-width: 1440px) {
    max-width: 1087px;
    margin-bottom: 33px;
    // padding:0 32px;
  }
`;
export const NamePageContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const NamePageContainerWithImg = styled.div`
  display: flex;
  padding-top: 6px;
`;
export const NamePage = styled.h1`
  margin: 0;
  color: ${props => props.theme.textColors.main};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
`;
export const NamePageDescription = styled.p`
  color: ${props => props.theme.textColors.main};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin: 0;
  margin-top: 4px;
`;
export const NamePageDescriptionSpan = styled.span`
  color: ${props => props.theme.notChangedcolors.accentColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;
export const NamePageDescriptionCont = styled.div`
  margin-left: 8px;
`;
export const MenuButton = styled.button`
  padding: 0;
  border: none;
  background: inherit;
  cursor: pointer;
`;
export const MenuButtonIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${props => props.theme.textColors.main};
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
export const UserBlockContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonFeedback = styled.button`
  width: 92px;
  height: 32px;
  border: none;
  border-radius: 10px;
  background: #3e85f3;
  color: ${props => props.theme.notChangedcolors.textBtnColor};
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  margin-right: 18px;
  cursor: pointer;
  &:hover {
    background: #2b78ef;
  }
  @media (min-width: 768px) {
    width: 130px;
    height: 42px;
    font-size: 14px;
    line-height: 18px;
    margin-right: 24px;
  }
`;
export const ButtonChangeThema = styled.button`
  border: none;
  width: 24px;
  height: 24px;
  background: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const IconChangeThema = styled.svg`
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const UserName = styled.h2`
  display: inline;
  margin: 0 8px;
  color: ${props => props.theme.textColors.modalText};

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  @media (min-width: 768px) {
    margin: 0 14px;
    font-size: 18px;
  }
`;
export const UserFoto = styled.img`
  border-radius: 32px;
  border: 1.8px solid ${props => props.theme.notChangedcolors.accentColor};
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
