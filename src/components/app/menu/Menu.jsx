import { useContext, useEffect, useState } from 'react';
import { menuContext } from './context';
import { NavLink } from 'react-router-dom';

import './menu.scss';
import classNames from 'classnames';

const Menu = () => {
  const { state } = useContext(menuContext);

  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    window.onclick = (e) => {
      if (!e.target.className.includes('navLink')) setActiveLink(null);
    };
  }, []);

  const getNavItems = (navItems, parentLink) => {
    return (
      <div
        link={parentLink}
        className={classNames('nav-wrapper indigo accent-3', {
          showNavWrapper: activeLink?.includes(parentLink),
        })}
      >
        <ul id="nav-mobile">
          {navItems.map(({ name, link, items }) => {
            if (parentLink) link = parentLink + link;
            return (
              <li key={name}>
                <NavLink
                  className="navLink"
                  to={link}
                  onClick={() => (items.length ? setActiveLink(link) : setActiveLink(null))}
                >
                  {name}
                </NavLink>

                {items.length ? getNavItems(items, link) : ''}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return <nav>{getNavItems(state.menuItems)}</nav>;
};

export default Menu;
