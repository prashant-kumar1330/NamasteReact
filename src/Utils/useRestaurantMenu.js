import { useState , useEffect} from "react";



const useRestaurantMenu = (resId)=>{
    
    const[menu,setMenu]= useState([]);
    useEffect(()=>{
        fetchRestrauntsMenu();
    },[])  

const fetchRestrauntsMenu = async ()=>{
     const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.564058&lng=77.1736968&restaurantId="+resId+"&submitAction=ENTER");
     const data = await res.json();
     console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
     setMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
  }

    return menu;

}


export default useRestaurantMenu ;