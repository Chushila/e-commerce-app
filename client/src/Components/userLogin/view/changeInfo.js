import { useContext } from "react";
import { UserContex } from "../../../Contexts/context";

function ChangeInfo(){
    const {user,setUser} = useContext(UserContex)

    return (
         <div>
              {user[0] &&
            <form id = 'ChangeInfo' action='http://localhost:3000/v1/myinfo?_method=PUT'  method='POST'>
            <div>
        <label for ='name'>first name</label>
        <input type = "text" id = "name" name = "customer_name" placeholder={`${user[0].customer_name}`}/>
    </div>
    <div>
        <label for ='surname'>last name</label>
        <input type = "text" id = "surname" name = "customer_surname" placeholder={`${user[0].customer_surname}`}/>
    </div>
    <div>
        <label for ='email'>email</label>
        <input type = "text" id = "email" name = "email" placeholder={`${user[0].email}`}/>
    </div>
    <div>
        <label for ='phone'>phone number</label>
        <input type = "text" id = "phone" name = "phone" placeholder={`${user[0].phone}`}/>
    </div>
    <button type ="submit">Save Changes </button>
            </form>
            }
        </div>
    )
}

export default ChangeInfo;