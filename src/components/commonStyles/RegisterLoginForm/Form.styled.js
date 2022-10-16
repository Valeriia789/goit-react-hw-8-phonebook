import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;

  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;

  background-color: lightgrey;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 5px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space[5]}px;
`;

export const Label = styled.label`
  font-size: ${props => props.theme.fontSizes[4]}px;
  text-shadow: 1px 1px 2px lightgrey;
`;

export const Input = styled.input`
  width: ${props => props.theme.sizes.l};
  padding: ${props => props.theme.space[4]}px;
  border: ${props => props.theme.borders.medium};
  border-color: ${props => props.theme.colors.primary};
  outline: 0;
  border-radius: ${props => props.theme.radii.sm};
  font-size: ${props => props.theme.fontSizes[3]}px;

  transition: 0.3s all linear;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.backgroundHover};
  }
`;

export const Button = styled.button`
  padding: ${props => props.theme.space[4]}px;
  border-color: ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.radii.sm};
  background-color: rgba(235, 200, 50, 0.5);
  font-size: ${props => props.theme.fontSizes[3]}px;

  transition: 0.3s all linear;

  &:hover {
    background-color: rgba(235, 200, 50, 1);
  }
`;
