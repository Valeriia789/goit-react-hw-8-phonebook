import { Routes, Route, NavLink } from 'react-router-dom';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        {/* <NavLink to="/login">Login</NavLink> */}
        <NavLink to="/register">Register</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/register" element={<RegisterView />} />
        {/* <Route path="/login" element={<LoginView/>} /> */}
      </Routes>
    </>
  );
};
