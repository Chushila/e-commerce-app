import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext, UserContex } from '../../Contexts/context';
import { smallNavHandler } from '../../media/utils';
import './Nav.css';
function Nav() {
  const { user } = useContext(UserContex);
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className="smallNav" onClick={smallNavHandler}>
      <Link id="orderLink" to="/orders">
        {' '}
        Orders
      </Link>

      {user[0] ? (
        <Link to="/user">{user[0].customer_name} </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
      {user[0] && (
        <form
          action="/logout?_method=DELETE"
          method="POST"
          id="logoutFormNav"
          onClick={() => document.getElementById('logoutForm').submit()}
        >
          Logout
        </form>
      )}
      <Link
        to="/"
        onClick={() => {
          setSearch({ isOn: false, term: '' });
        }}
      >
        Home
      </Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}
export default Nav;
