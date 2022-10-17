import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import useAuth from '../../hooks/useAuth';
import { MenuContainer } from './UserMenu.styled';
import { ButtonHeader } from 'components/commonStyles/ButtonHeader.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <MenuContainer>
      <span>Welcome, {user.name}</span>
      <ButtonHeader type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonHeader>
    </MenuContainer>
  );
};

export default UserMenu;
