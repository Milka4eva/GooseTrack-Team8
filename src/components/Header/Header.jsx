import { useState } from 'react';

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

const Header = props => {
  const [defaultThema, setDeafultThema] = useState(true);
  const [isHidenMenu] = useMediaQuery('(min-width: 1440px)');

  const handleChangeThema = () => {
    setDeafultThema(prev => !prev);
  };

  const namePageTitle = () => {
    switch (props.namePage) {
      case '/statistics':
        return 'Statistics';

      case '/account':
        return 'Account';

      case '/calendar':
        return 'Calendar';

      default:
        break;
    }
  };

  const defUser = require('../../images/defUser.jpg');
  const { name, avatarUrl } = props.userInfo;
  return (
    <HeaderContainer>
      {isHidenMenu ? (
        false ? (
          <NamePageContainerWithImg>
            <img
              src={require('../../images/gusPage.png')}
              alt="pages-gus"
              height={60}
              width={64}
            />
            <NamePageDescriptionCont>
              <NamePage>{namePageTitle()}</NamePage>
              <NamePageDescription>
                <NamePageDescriptionSpan>Let go</NamePageDescriptionSpan> of the
                past and focus on the present!
              </NamePageDescription>
            </NamePageDescriptionCont>
          </NamePageContainerWithImg>
        ) : (
          <NamePageContainer>
            <NamePage>{namePageTitle()}</NamePage>
          </NamePageContainer>
        )
      ) : (
        <MenuButton>
          <MenuButtonIcon onClick={() => props.sideStatus(true)}>
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
        <UserName>{name}</UserName>
        {avatarUrl ? (
          <UserFoto src={avatarUrl} alt="userFoto" />
        ) : (
          <UserFoto src={defUser} alt="userFoto" />
        )}
      </UserBlockContainer>
    </HeaderContainer>
  );
};

export default Header;
