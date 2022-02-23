import { useContext } from 'react';
import { CARS } from './constants';
import { postsContext } from './context';
import Posts from './Posts';

const Cars = () => {
  const { state } = useContext(postsContext);

  return (
    <div className="cars">
      <ul className="collection">
        <li className="collection-header center">
          <h3>Cars</h3>
        </li>
        <Posts posts={state.filter(({ post }) => post === CARS)} />
      </ul>
    </div>
  );
};

export default Cars;
