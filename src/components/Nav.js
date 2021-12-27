import { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavContext from '../context/NavContext';
import { NAV_TOGGLE } from '../context/types/NavTypes';

const Nav = () => {
  const { state, dispatch } = useContext(NavContext);
  const closeModel = e => {
    const className = e.target.getAttribute('class');
    if (className === 'navLayer') {
      dispatch({ type: NAV_TOGGLE });
    }
  };
  return (
    <>
      {/* If state is true show nav transparentcy : empty '' */}
      {state ? <div className="navLayer" onClick={closeModel}></div> : ''}
      <div className={state ? 'nav nav--open' : 'nav nav--close'}>
        <div className="nav__content">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </div>
    </>
  );
};
export default Nav;
