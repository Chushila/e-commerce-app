import {validateInputs} from '../../../media/utils'
import './form.css';

function Register() {
  function checkUserName(){
    const regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
    if(document.getElementById('username').value.match(regex))
  }
  return (
    <div className="Register">
      <h1>Register</h1>
      <form action="/register" method="POST" >
        <div className="formDiv">
          <div>
            <label htmlFor="username">username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="text" id="password" name="password" required />
          </div>
          <div>
            <label htmlFor="name">first name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="surname">last name</label>
            <input type="text" id="surname" name="surname" required />
          </div>
          <div>
            <label htmlFor="email" >email</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="tel">phone number</label>
            <input type="text" id="phone" name="phone" required />
          </div>
        </div>
        <button type="submit" onClick = {validateInputs}>Register </button>
      </form>
      <a href="/login"> Login</a>
    </div>
  );
}

export default Register;
