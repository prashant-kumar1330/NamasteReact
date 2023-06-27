import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.png"
import userContext from "../Utils/userContext";
import { useSelector } from "react-redux";


const NavBar =()=>{
   
  const [Login_Logut , setLoginLogout] = useState("Login")
     
  const {user}= useContext(userContext);
  const cartItem = useSelector((store) =>{
    return store.cart.item
  })
  console.log("cartItem => "+cartItem)
    return (
      <div className="nav-body flex bg-slate-200 shadow justify-between ">
        <div>
          <img className="logo h-21 p-5 w-23" src={Logo} alt="logo"></img>
        </div>
      
          <ul className=" flex  py-24 " >
            <Link to="/">
              <li className="px-4 font-bold  hover:text-red-400"> Home
              </li>
            </Link>
            <Link to="/instamart">
              <li className="px-4 font-bold  hover:text-red-400"> Instamart
              </li>
            </Link>

            <li className="px-4 font-bold  hover:text-red-400"> Sign In
            </li>
            <Link to='/cart'>
            <li className="px-4 font-bold  hover:text-red-400">Cart {cartItem.length}
            </li>
            </Link>
           
            <Link to="/about">
              <li className="px-4 font-bold hover:text-red-400">About
              </li>
            </Link>
            <li className="px-4 font-bold  hover:text-red-400">
            <button
            className="Login-btn space-y-4 bg-teal-200 rounded-full ...  scale-250 cursor-pointer shadow-xl"
            onClick={() => {
              Login_Logut === "Login"
                ? setLoginLogout("Logout")
                : setLoginLogout("Login");
            }}
          >
            {Login_Logut}
          </button>
            </li>
           
            <h1>
              {user.name +" "+ user.email}
            </h1>
          </ul>
         
        
      </div>
    );
  }


  export default NavBar;