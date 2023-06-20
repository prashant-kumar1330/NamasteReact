import { useEffect, useState } from "react"



const useIsonline = ()=>{
  const [isOnline,setIsonline]= useState(false);

  useEffect(()=>{

      const handleOnline  = (e)=>{
        console.log(e+"p");
         setIsonline(false);
       }
    
      const handleOffline =(e)=>{
        console.log(e +"j");
        setIsonline(true);
       }  

       window.addEventListener("online",handleOnline)
       window.addEventListener("offline",handleOffline)

       return ()=>{
        window.removeEventListener("online" ,handleOnline)
        window.removeEventListener("offline" ,handleOffline)
       }

  },[]) 
console.log(isOnline);
return isOnline;

}

export default useIsonline;