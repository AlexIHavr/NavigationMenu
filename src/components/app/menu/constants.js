export const HOME = '/home';
export const NEWS_BREAKING = '/news/breaking';
export const NEWS_YEARS = '/news/years';
export const POST_CURRENT_CARS = '/posts/current/cars';
export const POST_CURRENT_PEOPLE = '/posts/current/people';
export const POST_CURRENT_FAVORITES = '/posts/current/favorites';

export const MENU_ITEMS = [
  {
    name: 'Home',
    link: HOME,
  },
  {
    name: 'News',
    items: [
      {
        name: 'Breaking news',
        link: NEWS_BREAKING,
      },
      {
        name: 'Years news',
        link: NEWS_YEARS,
      },
    ],
  },
  {
    name: 'Posts',
    items: [
      {
        name: 'Current',
        items: [
          {
            name: 'Cars',
            link: POST_CURRENT_CARS,
          },
          {
            name: 'People',
            link: POST_CURRENT_PEOPLE,
          },
          {
            name: 'Favorites',
            link: POST_CURRENT_FAVORITES,
          },
        ],
      },
    ],
  },
];
