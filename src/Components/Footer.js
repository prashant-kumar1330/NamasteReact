import {useContext } from "react";
import userContext from "../Utils/userContext";


const Footer= ()=>{
    const {user} = useContext(userContext)
    return (
        <div>
            <h1>Footer</h1>
            <h2>this is made by {user.name} email {user.email}</h2>
        </div>
    )
}


export default Footer;