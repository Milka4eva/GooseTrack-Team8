import { NavLink, NavLinkFocus, NavLinkHover } from './AuthNav.styled';
import { NavLink } from 'react-router-dom';

export default function AuthNav({ formType }) {
  const fillRout = formType === 'register' ? '/login' : '/register';
  const fillContent = formType === 'register' ? 'Log In' : 'Sign up';

  return (
    <NavLink to={fillRout}>
      {fillContent}
    </NavLink>
  );
}