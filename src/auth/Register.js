import { useContext, useState } from 'react';
import ModelContext from '../context/ModelContext';
import { OPEN_MODEL } from '../context/types/ModelTypes';

const Register = props => {
  const { dispatch } = useContext(ModelContext);
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const registerForm = e => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={registerForm}>
      <div className="model__heading">
        <h3>Create new account</h3>
      </div>
      <div className="group">
        <input
          type="text"
          className="group__control"
          name=""
          placeholder="Enter Name"
          onChange={e => setState({ ...state, name: e.target.value })}
          value={state.name}
        ></input>
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
          placeholder="Create Password"
          onChange={e => setState({ ...state, password: e.target.value })}
          value={state.password}
        ></input>
      </div>
      <div className="group model__row">
        <input
          type="submit"
          className="btn-dark"
          name=""
          value="Register"
        ></input>
        <span
          onClick={() =>
            dispatch({ type: OPEN_MODEL, payload: props.currentModel })
          }
        >
          Already have an account?
        </span>
      </div>
    </form>
  );
};
export default Register;
