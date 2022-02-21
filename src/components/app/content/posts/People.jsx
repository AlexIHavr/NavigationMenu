import { useContext } from 'react';
import { PEOPLE } from './constants';
import { postsContext } from './context';

const People = () => {
  const { state, toggleFavorite } = useContext(postsContext);

  return (
    <div className="cars">
      <ul className="collection">
        <li className="collection-header center">
          <h3>People</h3>
        </li>
        {state
          .filter(({ post }) => post === PEOPLE)
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

export default People;
