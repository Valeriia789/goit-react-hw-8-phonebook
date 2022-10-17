import styled from '@emotion/styled';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fontSizes[2]}px;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes[2]}px;

  background-color: ${props => props.theme.colors.fill};

  border: ${props => props.theme.borders.medium};
  border-color: ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.radii.sm};

  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  &:hover {
    background-color: ${props => props.theme.colors.backgroundAccent};
  }
`;
