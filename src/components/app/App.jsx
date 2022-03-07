import Menu from './menu/Menu';
import Content from './content/Content';
import { LoginProvider } from './login/context';
import { Route, Routes } from 'react-router-dom';
import Login from './login/Login';

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/login"
          element={
            <LoginProvider>
              <Login />
            </LoginProvider>
          }
        ></Route>
        <Route
          path="*"
          element={
            <>
              <Menu />
              <LoginProvider>
                <Content />
              </LoginProvider>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
