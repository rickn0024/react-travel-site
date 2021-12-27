import { useContext, useState } from 'react';
import ModelContext from '../context/ModelContext';
import { OPEN_MODEL } from '../context/types/ModelTypes';

const Login = props => {
  const { dispatch } = useContext(ModelContext);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const loginForm = e => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={loginForm}>
      <div className="model__heading">
        <h3>Login</h3>
      </div>

      <div className="group">
        <input
          type="email"
          className="group__control"
          name=""
          placeholder="Enter Email"
          onChange={e => setState({ ...state, email: e.target.value })}
          value={state.email}
        ></input>
      </div>
      <div className="group">
        <input
          type="password"
          className="group__control"
          name=""
          placeholder="Enter Password"
          onChange={e => setState({ ...state, password: e.target.value })}
          value={state.password}
        ></input>
      </div>
      <div className="group model__row">
        <input type="submit" className="btn-dark" name="" value="Login"></input>
        <span
          onClick={() =>
            dispatch({ type: OPEN_MODEL, payload: props.currentModel })
          }
        >
          Create new account?
        </span>
      </div>
    </form>
  );
};
export default Login;
