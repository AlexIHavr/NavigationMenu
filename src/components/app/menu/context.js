import { createContext } from 'react';

const initialState = {
  menuItems: [
    {
      name: 'Home',
      link: '/home',
      items: [],
    },
    {
      name: 'News',
      link: '/news',
      items: [
        {
          name: 'Breaking news',
          link: '/breaking',
          items: [],
        },
        {
          name: 'Years news',
          link: '/years',
          items: [],
        },
      ],
    },
    {
      name: 'Posts',
      link: '/posts',
      items: [
        {
          name: 'Current posts',
          link: '/current',
          items: [
            {
              name: 'Cars',
              link: '/cars',
              items: [],
            },
            {
              name: 'People',
              link: '/people',
              items: [],
            },
          ],
        },
      ],
    },
  ],
};

export const menuContext = createContext();

export const MenuProvider = ({ children }) => {
  return <menuContext.Provider value={{ state: initialState }}>{children}</menuContext.Provider>;
};
