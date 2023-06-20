import { useEffect, useState } from "react";
import { RES_DETAIL_API } from "./utils";

const useRestaurant =()=>{
    const [restaurantList , setRestaurantList] = useState([]);
   

  console.log("h");
    useEffect( ()=>{
        fetchData();   
     
     },[])
     
      const fetchData = async ()=>{
         try{
             const data = await fetch(RES_DETAIL_API)
             const json = await data.json();
             console.log(json?.data?.cards[2]?.data?.data.cards);
             
             setRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
             
 
            
         }
         catch(error){
             console.log(error);
            // return <h1>something went wrong</h1>
             
         }
   
      }

      return restaurantList;

}

export default useRestaurant;