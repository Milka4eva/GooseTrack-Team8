import styled from 'styled-components';

export const NavLink = styled.div`
font-weight: 600;
font-size: 18px;
line-height: 1.16;
color: var(--main-blue-color);
text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
  0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
margin: 18px auto;
text-decoration: underline;
`;

export const NavLinkFocus = styled.div`
    transform: scale(1.2);
    `;

export const NavLinkHover = styled.div`
    transform: scale(1.2);
    `;