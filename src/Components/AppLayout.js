import NavBar from "./NavBar"
import Body from "./Body"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import userContext from "../Utils/userContext"
import {Provider} from "react-redux"
import store from "../Utils/store"


const AppLayout = ()=>{

  const [user, setUser]= useState({
    name:"prashant",
    email:"prashant@gmail.com"
  })

    return (
      <div className="AppRoot"> 
      <Provider store={store}>
      <userContext.Provider value={{user:user, setUser:setUser}}>
        <NavBar/>
        <Outlet/>
        <Footer/>
      </userContext.Provider>
      </Provider>

   
      </div>
    )
 }

 export default AppLayout