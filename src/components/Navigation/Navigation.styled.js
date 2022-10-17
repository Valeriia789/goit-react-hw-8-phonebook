import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  display: flex;
  margin-bottom: -3px;
`;

export const NavLinkStyled = styled(NavLink)`
  margin-bottom: 3px;
  margin-right: 20px;
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes[4]}px;
  color: black;

  &:hover {
    text-shadow: 2px 2px 3px lightgray;
  }
`;
