import { useContext } from 'react';
import { CARS } from './constants';
import { postsContext } from './context';

const Cars = () => {
  const { state, toggleFavorite } = useContext(postsContext);

  return (
    <div className="cars">
      <ul className="collection">
        <li className="collection-header center">
          <h3>Cars</h3>
        </li>
        {state
          .filter(({ post }) => post === CARS)
          .map(({ title, favorite }) => {
            return (
              <li key={title} className="collection-item">
                <span className="title">{title}</span>
                <a className="secondary-content" onClick={() => toggleFavorite(title)}>
                  <i className="material-icons">{favorite ? 'star' : 'star_border'}</i>
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cars;
