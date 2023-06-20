
export const filterResByRating = (restaurantList) =>{
    const filteredListrating = restaurantList.filter((restaurant)=>            
    restaurant?.data?.avgRating>=4
    )
    return filteredListrating;
}

export const filterResBySearchText = (searchValue, restaurantList)=>{
   return  restaurantList.filter((res)=>{
           return res.data.name.toLowerCase().includes(searchValue.toLowerCase())
          })
}

 
