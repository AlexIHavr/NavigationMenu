import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './menu.scss';
import classNames from 'classnames';
import { MENU_ITEMS } from './constants';
import NavItem from './NavItem';

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
              <NavItem
                key={name}
                name={name}
                link={link}
                items={items}
                newActiveItem={newActiveItem}
                activeItem={activeItem}
                changeActiveItem={changeActiveItem}
                getNavItems={getNavItems}
              />
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
