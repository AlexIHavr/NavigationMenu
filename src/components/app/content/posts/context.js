import { createContext, useState } from 'react';
import { CARS, PEOPLE, POSTS } from './constants';

const posts = JSON.parse(localStorage.getItem(POSTS));

const initialState = posts ?? [
  {
    post: CARS,
    title: 'Nissan',
    favorite: false,
  },
  {
    post: CARS,
    title: 'Volvo',
    favorite: false,
  },
  {
    post: CARS,
    title: 'Tesla',
    favorite: false,
  },
  {
    post: CARS,
    title: 'Toyota',
    favorite: false,
  },
  {
    post: PEOPLE,
    title: 'Alexander',
    favorite: false,
  },
  {
    post: PEOPLE,
    title: 'Pavel',
    favorite: false,
  },
  {
    post: PEOPLE,
    title: 'Denis',
    favorite: false,
  },
];

export const postsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const toggleFavorite = (title) => {
    const newPosts = state.map((post) =>
      title === post.title ? { ...post, favorite: !post.favorite } : { ...post }
    );
    setState(newPosts);
    localStorage.setItem(POSTS, JSON.stringify(newPosts));
  };

  return (
    <postsContext.Provider value={{ state, toggleFavorite }}>{children}</postsContext.Provider>
  );
};
