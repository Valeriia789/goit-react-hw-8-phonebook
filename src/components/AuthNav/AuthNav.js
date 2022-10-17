import { NavLink } from 'react-router-dom';
import { ButtonHeader } from 'components/commonStyles/ButtonHeader.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">
        <ButtonHeader>Register</ButtonHeader>
      </NavLink>
      <NavLink to="/login">
        <ButtonHeader>Login</ButtonHeader>
      </NavLink>
    </div>
  );
};
