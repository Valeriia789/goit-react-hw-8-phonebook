import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import {
  FormContainer,
  Form,
  InputContainer,
  Label,
  Input,
  Button,
} from 'components/commonStyles/RegisterLoginForm/Form.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer>
      <div>
        <h2>Registration form</h2>
      </div>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <InputContainer>
          <Label htmlFor="name">Username</Label>
          <Input type="text" name="name" placeholder="Ivan Karavan" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" placeholder="IvanKaravan@ukr.net" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" placeholder="PtnPnh2022" />
        </InputContainer>
        <Button type="submit">Register</Button>
      </Form>
    </FormContainer>
  );
};
