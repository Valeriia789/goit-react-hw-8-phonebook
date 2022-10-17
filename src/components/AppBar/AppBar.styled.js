import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin: -8px;
  padding: 10px 20px;
  border-bottom: 1px solid lightgrey;
  background-color: ${props => props.theme.colors.fill};
`;
