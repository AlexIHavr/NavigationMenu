import { useContext } from 'react';
import { postsContext } from './context';

const Favorites = () => {
  const { state, toggleFavorite } = useContext(postsContext);

  return (
    <div className="favorites">
      <ul className="collection">
        <li className="collection-header center">
          <h3>Favorites</h3>
        </li>
        {state.map(({ title, favorite }) => {
          {
            return favorite ? (
              <li key={title} className="collection-item">
                <span className="title">{title}</span>
                <a className="secondary-content" onClick={() => toggleFavorite(title)}>
                  <i className="material-icons">star</i>
                </a>
              </li>
            ) : (
              ''
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Favorites;
