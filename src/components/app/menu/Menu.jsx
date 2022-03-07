import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './menu.scss';
import classNames from 'classnames';
import { MENU_ITEMS } from './constants';
import MenuItem from './MenuItem';

const Menu = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [closedMenu, setClosedMenu] = useState(true);

  const changeActiveItem = (items, newActiveItem) => {
    if (items) {
      setActiveItem(newActiveItem);
      setClosedMenu(false);
    } else {
      setActiveItem(null);
      setClosedMenu(true);
    }
  };

  const getNavItems = (navItems, itemName) => {
    return (
      <div
        name={itemName}
        className={classNames('nav-wrapper indigo accent-3', {
          showNavWrapper: !closedMenu && activeItem?.includes(itemName),
        })}
      >
        <ul id="nav-mobile">
          {navItems.map(({ name, link, items }) => {
            const newActiveItem = (itemName ? `${itemName}/` : '') + name;
            if (!activeItem && window.location.pathname === link) setActiveItem(newActiveItem);
            return (
              <li key={name}>
                <MenuItem
                  key={name}
                  name={name}
                  link={link}
                  activeItem={activeItem}
                  changeActiveItem={() => changeActiveItem(items, newActiveItem)}
                />
                {items && getNavItems(items, newActiveItem)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  useEffect(() => {
    window.onclick = (e) => {
      if (!e.target.className.includes('navLink')) {
        setClosedMenu(true);
        setActiveItem(null);
      }
    };
  }, []);

  return <nav>{getNavItems(MENU_ITEMS)}</nav>;
};

export default Menu;
