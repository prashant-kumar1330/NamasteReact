import NavBar from "./NavBar"
import Body from "./Body"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import userContext from "../Utils/userContext"


const AppLayout = ()=>{

  const [user, setUser]= useState({
    name:"prashant",
    email:"prashant@gmail.com"
  })

    return (
      <div className="AppRoot"> 
      <userContext.Provider value={{user:user, setUser:setUser}}>
        <NavBar/>
        <Outlet/>
        <Footer/>
      </userContext.Provider>
   
      </div>
    )
 }

 export default AppLayout