import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const NavItem = ({
  name,
  link,
  activeItem,
  items,
  newActiveItem,
  changeActiveItem,
  getNavItems,
}) => {
  return (
    <li key={name}>
      {link ? (
        <NavLink
          className="navLink"
          to={link}
          onClick={() => changeActiveItem(items, newActiveItem)}
        >
          {name}
        </NavLink>
      ) : (
        <a
          className={classNames('navLink', {
            active: activeItem?.includes(name),
          })}
          onClick={() => changeActiveItem(items, newActiveItem)}
        >
          {name}
        </a>
      )}

      {items && getNavItems(items, newActiveItem)}
    </li>
  );
};

export default NavItem;
