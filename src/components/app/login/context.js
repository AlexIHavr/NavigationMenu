import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LOGIN = 'root';
const PASSWORD = 'root';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9vdCJ9.-UTw054X7MYpU2WwUadLhVERi7_zW1OgyVK9g_aAFXw';

export const loginContext = createContext();

export const LoginProvider = ({ children }) => {
  const checkAuth = () => {
    return localStorage.getItem('access', ACCESS_TOKEN) === ACCESS_TOKEN;
  };

  const [isAuth, setIsAuth] = useState(checkAuth());
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const state = {
    isAuth,
    errorMessage,
  };

  const auth = (e, backPath) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (formData.get('login') !== LOGIN && formData.get('password') !== PASSWORD) {
      return setErrorMessage('Incorrect login or password.');
    }

    setIsAuth(true);
    localStorage.setItem('access', ACCESS_TOKEN);

    backPath ? navigate(backPath) : navigate('/home');
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('access');
  };

  return <loginContext.Provider value={{ state, auth, logout }}>{children}</loginContext.Provider>;
};
