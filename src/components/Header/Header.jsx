import {
    HeaderContainer,
    ButtonFeedback,
    UserName,
    UserFoto,
    ButtonChangeThema,
    UserBlockContainer,
    MenuButton,
    MenuButtonIcon,
    IconChangeThema,
    NamePageContainer,
    NamePage,
    NamePageDescriptionSpan,
    NamePageDescription,
    NamePageDescriptionCont,
    NamePageContainerWithImg,
  } from './Header.styled';
  import { useMediaQuery } from '@chakra-ui/react';
  
  import Icon from '../../images/icons.svg';
  import { useState } from 'react';
  
  //-----------------------------------------------------------------------------
  // з пропс забираемо всі потрібні дані імья сторінки, юзера , фото , наявність не виконаних завдань
  // при необхідності видалити маржини з контейнеру  HeaderContainer
  
  const Header = ({ props }) => {
    const [defaultThema, setDeafultThema] = useState(true);
    const [isHidenMenu] = useMediaQuery('(min-width: 1440px)');
  
    const handleChangeThema = () => {
      setDeafultThema(prev => !prev);
    };
  
    const defUser = require('../../images/defUser.jpg');
  
    return (
      <HeaderContainer>
        {isHidenMenu ? (
          true ? (
            <NamePageContainerWithImg>
              <img
                src={require('../../images/gusPage.png')}
                alt="pages-gus"
                height={60}
                width={64}
              />
              <NamePageDescriptionCont>
                <NamePage>Name Page</NamePage>
                <NamePageDescription>
                  <NamePageDescriptionSpan>Let go</NamePageDescriptionSpan> of the
                  past and focus on the present!
                </NamePageDescription>
              </NamePageDescriptionCont>
            </NamePageContainerWithImg>
          ) : (
            <NamePageContainer>
              <NamePage>Name Page</NamePage>
            </NamePageContainer>
          )
        ) : (
          <MenuButton>
            <MenuButtonIcon onClick={() => console.log('open navigation menu')}>
              <use href={Icon + '#menu'} />
            </MenuButtonIcon>
          </MenuButton>
        )}
  
        <UserBlockContainer>
          <ButtonFeedback onClick={() => console.log('open feedback modal')}>
            Feedback
          </ButtonFeedback>
          <ButtonChangeThema onClick={handleChangeThema}>
            <IconChangeThema>
              {defaultThema ? (
                <use href={Icon + '#icon-moon'} />
              ) : (
                <use href={Icon + '#icon-sun'} />
              )}
            </IconChangeThema>
          </ButtonChangeThema>
          <UserName>User Name</UserName>
          {false ? (
            <UserFoto src={props.userFoto} alt="userFoto" />
          ) : (
            <UserFoto src={defUser} alt="userFoto" />
          )}
        </UserBlockContainer>
      </HeaderContainer>
    );
  };
  
  export default Header;
  