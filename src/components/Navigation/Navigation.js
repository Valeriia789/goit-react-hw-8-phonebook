import useAuth from '../../hooks/useAuth';
import { NavStyled, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavStyled>
      <NavLinkStyled to="/" end>
        Home
      </NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </NavStyled>
  );
};
