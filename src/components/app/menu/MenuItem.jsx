import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ name, link, activeItem, changeActiveItem }) => {
  return link ? (
    <NavLink className="navLink" to={link} onClick={changeActiveItem}>
      {name}
    </NavLink>
  ) : (
    <a
      className={classNames('navLink', {
        active: activeItem?.includes(name),
      })}
      onClick={changeActiveItem}
    >
      {name}
    </a>
  );
};

export default MenuItem;
