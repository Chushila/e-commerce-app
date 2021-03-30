import './form.css'

function Login() {

    return (
      <div className="Login">
        <h1>Login</h1>
<form action = "http://localhost:3000/v1/login" method="POST">
    <div>
        <div>
            <label htmlFor ='username'>username</label>
            <input type = "text" id = "username" name = "username" required/>
        </div>
        <div>
            <label htmlFor ='password'>password</label>
            <input type = "text" id = "password" name = "password" required/>
        </div>
        <button type ="submit">Login </button>
        </div>
</form>
<a href = '/register'> Register</a>
      </div>
    );
  }
export default Login;