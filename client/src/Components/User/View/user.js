import './user.css';
import { useEffect, useContext } from 'react';
import { UserContex } from '../../../Contexts/context';
import { Link } from 'react-router-dom';

function User() {
  const { user, setUser } = useContext(UserContex);
  function getUserInfo() {
    fetch('v1/myinfo', {
      credentials: 'include',
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((res) => setUser(res.messages))
      .catch((err) => err);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="User">
      {user[0] && (
        <div className="UserInfo">
          <p>
            Name: {user[0].customer_name.concat(' ', user[0].customer_surname)}
          </p>
          <p>Username: {user[0].username}</p>
          <p>Phone Number: {user[0].phone || 'none'}</p>
          <p>Email: {user[0].email}</p>
          <Link to="/changeInfo">Change Account Information</Link>
        </div>
      )}
    </div>
  );
}

export default User;
