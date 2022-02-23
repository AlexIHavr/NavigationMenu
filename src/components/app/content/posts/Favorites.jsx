import { useContext } from 'react';
import { postsContext } from './context';
import Posts from './Posts';

const Favorites = () => {
  const { state } = useContext(postsContext);

  return (
    <div className="favorites">
      <ul className="collection">
        <li className="collection-header center">
          <h3>Favorites</h3>
        </li>
        <Posts posts={state.filter(({ favorite }) => favorite)} />
      </ul>
    </div>
  );
};

export default Favorites;
