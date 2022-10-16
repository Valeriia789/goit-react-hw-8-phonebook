import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import {
  FormContainer,
  Form,
  InputContainer,
  Label,
  Input,
  Button,
} from 'components/commonStyles/RegisterLoginForm/Form.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer>
      <div>
        <h2>Login form</h2>
      </div>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" />
        </InputContainer>

        <Button type="submit">Login</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
