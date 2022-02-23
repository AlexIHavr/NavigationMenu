import { useContext } from 'react';
import { PEOPLE } from './constants';
import { postsContext } from './context';
import Posts from './Posts';

const People = () => {
  const { state } = useContext(postsContext);

  return (
    <div className="cars">
      <ul className="collection">
        <li className="collection-header center">
          <h3>People</h3>
        </li>
        <Posts posts={state.filter(({ post }) => post === PEOPLE)} />
      </ul>
    </div>
  );
};

export default People;
