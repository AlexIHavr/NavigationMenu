import { useContext } from 'react';
import { postsContext } from './context';

const Posts = ({ posts }) => {
  const { toggleFavorite } = useContext(postsContext);

  return posts.map(({ title, favorite }) => (
    <li key={title} className="collection-item">
      <span className="title">{title}</span>
      <a className="secondary-content" onClick={() => toggleFavorite(title)}>
        <i className="material-icons">{favorite ? 'star' : 'star_border'}</i>
      </a>
    </li>
  ));
};

export default Posts;
