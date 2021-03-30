import './form.css'

function Register(){
    return(
        <div className ='Register' >
        <h1>Register</h1>
<form action = "http://localhost:3000/v1/register" method="POST">
    <div>
        <div>
            <label htmlFor ='username'>username</label>
            <input type = "text" id = "username" name = "username" required/>
        </div>
        <div>
            <label htmlFor ='password'>password</label>
            <input type = "text" id = "password" name = "password" required/>
        </div>
        <label htmlFor ='name'>first name</label>
        <input type = "text" id = "name" name = "name" required/>
    </div>
    <div>
        <label htmlFor ='surname'>last name</label>
        <input type = "text" id = "surname" name = "surname" required/>
    </div>
    <div>
        <label htmlFor ='email'>email</label>
        <input type = "text" id = "email" name = "email" required/>
    </div>
    <div>
        <label htmlFor ='phone'>phone number</label>
        <input type = "text" id = "phone" name = "phone" required/>
    </div>
    <button type ="submit">Register </button>
</form>
<a href = '/login'> Login</a>
</div>
    )
}

export default Register;