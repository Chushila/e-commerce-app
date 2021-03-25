import './user.css'
import {useState,useEffect,useContext} from 'react'
import {UserContex} from '../../../Contexts/context'

function User(){
    const {user,setUser} = useContext (UserContex);
    function getUserInfo(){
        fetch("http://localhost:3000/v1/myinfo",{
            credentials:'include',
            mode:'cors'
          })
    .then(res=>res.json()).then(res=>setUser(res.messages))
    .catch(err => err)
    }

    useEffect(()=>{
        getUserInfo()
    },[])


    return(
        <div className = 'User'>
           {user ? `${user.customer_name}` : 'no user'}
        </div>
    )

}

export default User;