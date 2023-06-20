import { createContext } from "react";

const userContext = createContext({
   user:{
    name:"dummyName",
    email:"dummyEmail@gmail.com"
   } 
})


export default userContext;