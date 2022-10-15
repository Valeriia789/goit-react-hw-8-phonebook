import { RegisterForm } from '../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div>
      <p>Registration</p>
      <RegisterForm />
    </div>
  );
};

// const RegisterPage = () => {
//   return (
//     <div>
//       <h1>Register here</h1>

//       <form autoComplete="off">
//         <label>
//           First Name
//           <input type="text" name="name" placeholder="Ivan" />
//         </label>

//         <label>
//           Last Name
//           <input type="text" name="surname" placeholder="Karavan" />
//         </label>

//         <label>
//           Email
//           <input type="email" name="email" placeholder="ivan-karavan@ukr.net" />
//         </label>

//         <label>
//           Password
//           <input type="password" name="password" placeholder="PtnPnh2022" />
//         </label>

//         <button type="submit">Create account</button>
//       </form>
//     </div>
//   );
// };

export default RegisterPage;
