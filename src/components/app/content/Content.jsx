import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  HOME,
  NEWS_BREAKING,
  NEWS_YEARS,
  POST_CURRENT_CARS,
  POST_CURRENT_FAVORITES,
  POST_CURRENT_PEOPLE,
} from '../menu/constants';
import { loginContext } from '../login/context';

import './content.scss';
import Home from './home/Home';
import Breaking from './news/Breaking';
import Years from './news/Years';
import Cars from './posts/Cars';
import Favorites from './posts/Favorites';
import { PostsProvider } from './posts/context';
import People from './posts/People';
import PrivateRoute from './privateRoute/PrivateRoute';

const Content = () => {
  const { state, logout } = useContext(loginContext);

  return (
    <div className="content">
      {state.isAuth && (
        <div className="logout">
          <a className="waves-effect waves-light btn blue pd-5" onClick={logout}>
            <i className="material-icons left">exit_to_app</i>Log out
          </a>
        </div>
      )}

      <Routes>
        <Route path={HOME} exact element={<Home />}></Route>
        <Route path={NEWS_BREAKING} exact element={<Breaking />}></Route>
        <Route path={NEWS_YEARS} exact element={<Years />}></Route>
        <Route
          path={POST_CURRENT_CARS}
          exact
          element={
            <PostsProvider>
              <Cars />
            </PostsProvider>
          }
        ></Route>
        <Route
          path={POST_CURRENT_PEOPLE}
          exact
          element={
            <PostsProvider>
              <People />
            </PostsProvider>
          }
        ></Route>

        <Route element={<PrivateRoute />}>
          <Route
            path={POST_CURRENT_FAVORITES}
            exact
            element={
              <PostsProvider>
                <Favorites />
              </PostsProvider>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Content;
