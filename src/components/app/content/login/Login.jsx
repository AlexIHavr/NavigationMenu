import classNames from 'classnames';
import { useContext } from 'react';
import { loginContext } from './context';
import './login.scss';

const Login = () => {
  const { state, auth } = useContext(loginContext);

  return (
    <form className="login col s6 center" onSubmit={auth}>
      <h3>Authentication</h3>
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="login" type="text" name="login" className="validate" required />
          <label htmlFor="login">Login</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">lock</i>
          <input id="password" type="password" name="password" className="validate" required />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="col s6">
          <span className={classNames({ error: state.errorMessage })}>{state.errorMessage}</span>
        </div>
      </div>
      <button className="btn waves-effect waves-light blue" type="submit" name="action">
        Log in
        <i className="material-icons right">send</i>
      </button>
    </form>
  );
};

export default Login;
