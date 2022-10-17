import styled from '@emotion/styled';

export const ButtonHeader = styled.button`
  margin-left: 5px;
  cursor: pointer;

  color: black;
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
