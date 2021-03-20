function Register(){
    return(
        <div className ='Register' >
        <h1>Register</h1>
<form action = "/v1/register" method="POST">
    <div>
        <div>
            <label for ='username'>username</label>
            <input type = "text" id = "username" name = "username" required/>
        </div>
        <div>
            <label for ='password'>password</label>
            <input type = "text" id = "password" name = "password" required/>
        </div>
        <label for ='name'>first name</label>
        <input type = "text" id = "name" name = "name" required/>
    </div>
    <div>
        <label for ='surname'>last name</label>
        <input type = "text" id = "surname" name = "surname" required/>
    </div>
    <div>
        <label for ='email'>email</label>
        <input type = "text" id = "email" name = "email" required/>
    </div>
    <div>
        <label for ='phone'>phone number</label>
        <input type = "text" id = "phone" name = "phone" required/>
    </div>
    <button type ="submit">Register </button>
</form>
<a href = '/v1/login'> Login</a>
</div>
    )
}

export default Register;