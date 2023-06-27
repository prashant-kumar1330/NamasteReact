import { useDispatch, useSelector } from "react-redux";
import { RES_IMG_URL } from "../Utils/utils";
import { clearCart, removeItem } from "../Utils/cartSlice";
const Cart = ()=>{
   const dispatch= useDispatch()
   
   const cartItem = useSelector((store)=>{
    return store.cart.item;
   })
   const handleCancel = (info)=>{
     dispatch(removeItem(info))
   }
   const handleClearCart = ()=>{
      dispatch(clearCart())
   }
    
      let ItemList =  cartItem.map((item)=>{
        return (
            <div className="menulist py-6">
         
            
          
            <div className="resdetails flex justify-between"> 
                   <div className="food-info px-10">
                     <h1 className="resname">{item.name}</h1>
                     <p className="description">{item.description}</p>
                    <h2>{item.defaultPrice/100 + " rs"} </h2>
                    <button className="bg-green-400 border-8" onClick={()=>{
                     handleCancel(item);
                    }}>cancel</button>
                  </div> 
                  
                   <img className="reslogo  w-60 " src={RES_IMG_URL+ item.imageId} alt="res-logo"></img>
              </div> 
             
           </div>
        )
       })
    
    return  (
      <div>
         <button className="bg-green-400 border-8 py-1 px-1" onClick={
         ()=>{handleClearCart()}
         }>
            Clear cart
         </button>
         {ItemList}
      </div>
    )
       
   

}


export default Cart;