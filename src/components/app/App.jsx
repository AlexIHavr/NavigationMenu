import Menu from './menu/Menu';
import Content from './content/Content';
import { LoginProvider } from './content/login/context';

const App = () => {
  return (
    <div className="wrapper">
      <Menu />
      <LoginProvider>
        <Content />
      </LoginProvider>
    </div>
  );
};

export default App;
