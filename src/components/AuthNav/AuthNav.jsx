import { NavLink, NavLinkFocus, NavLinkHover } from './AuthNav.styled';
import { NavigationLink } from 'react-router-dom';

export default function AuthNav({ formType }) {
  const fillRout = formType === 'register' ? '/login' : '/register';
  const fillContent = formType === 'register' ? 'Log In' : 'Sign up';

  return (
    <NavigationLink to={fillRout}>
      {fillContent}
    </NavigationLink>
  );
}