import { Link } from "react-router-dom";
import ResCard from "./ResCards";
import { useContext, useEffect, useState} from "react";
import { filterResByRating, filterResBySearchText } from "../Utils/shared.";
import useRestaurant from "../Utils/useRestaurant";
import useIsonline from "../Utils/useIsonline";
import userContext from "../Utils/userContext";


const Body=  ()=>{
  const {setUser} = useContext(userContext) 
   const isOnline = useIsonline(); 
   if(isOnline){
      console.log("offline now")
      return <h1>You are offline , Please check your internet</h1>
    }

    const [searchValue, setSearchValue] =useState("");
    
    const restaurantList = useRestaurant();

    const[filteredList, setFilteredList] = useState(restaurantList);
  

   useEffect(()=>{
       setFilteredList(restaurantList)  ;
   })


     console.log(filteredList);
     console.log(restaurantList);




     if(restaurantList.length === 0){
        return <h1>Loading ....</h1>
     }
    

    return (
      <div className="body">

         <div className="flex bg-gray-300">
         <div className="filter-icons py-10 px-10">
          <button
            className="btn rounded-xl bg-sky-200"
            onClick={() => {
              const filteredListrating = filterResByRating(restaurantList);
              setFilteredList(filteredListrating);
            }}
          >
            Top rated restaurant
          </button>
        </div>
        <div className="search-bar py-10 px-10">
          <input
            className="search-feild space-x-5"
            type="text"
            value={searchValue}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchValue(e.target.value);
            }}
          ></input>
          <button
            className="search-btn bg-slate-400 space-x-5"
            onClick={() => {
              const SearchResult = filterResBySearchText(
                searchValue,
                restaurantList
              );
              setFilteredList(SearchResult);
            }}
          >
            Search
          </button>
          <input  className="search-feild space-x-5 px-3 m-3" type="text" onChange={(e)=>{
            setUser({
              name:e.target.value
            })
          }}></input>
        </div>
         </div>
        
        <div className="res-list flex flex-wrap px-28 " >
          {filteredList.map((restaurant) => {
            return (
              <Link
                to={"/restraunt/" + restaurant?.data?.id}
                key={restaurant?.data?.id}
              >
                <ResCard resData={restaurant}></ResCard>
              </Link>
            );
          })}
          
     
       
        </div>
       
      </div>
    );
  }

 export default Body; 

