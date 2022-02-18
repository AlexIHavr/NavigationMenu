import Menu from './menu/Menu';
import { MenuProvider } from './menu/context';

const App = () => {
  return (
    <MenuProvider>
      <Menu />
    </MenuProvider>
  );
};

export default App;
