import { useContext } from 'react';
import { UserContex } from '../../../Contexts/context';
import './form.css';

function ChangeInfo() {
  const { user } = useContext(UserContex);

  return (
    <div className="ChangeInfo">
      {user[0] && (
        <div className="formDiv">
          <form id="ChangeInfo" action="v1/myinfo?_method=PUT" method="POST">
            <div>
              <label htmlFor="name">first name</label>
              <input
                type="text"
                id="name"
                name="customer_name"
                placeholder={`${user[0].customer_name}`}
              />
            </div>
            <div>
              <label htmlFor="surname">last name</label>
              <input
                type="text"
                id="surname"
                name="customer_surname"
                placeholder={`${user[0].customer_surname}`}
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder={`${user[0].email}`}
              />
            </div>
            <div>
              <label htmlFor="phone">phone number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder={`${user[0].phone}`}
              />
            </div>
            <button type="submit">Save Changes </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChangeInfo;
