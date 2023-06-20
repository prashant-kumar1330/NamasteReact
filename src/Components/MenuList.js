import { RES_IMG_URL } from "../Utils/utils";
const MenuList = ( props )=>{
    const {menuInfo} =props;
    console.log( menuInfo);
    const info = menuInfo?.card?.info;
    return (
        <div className="menulist py-6">

         <div className="resdetails flex justify-between"> 
                <div className="food-info px-10">
                  <h1 className="resname">{info?.name}</h1>
                  <p className="description">{info?.description}</p>
                 <h2>{info.defaultPrice/100 + " rs"} </h2>
               </div> 
               
                <img className="reslogo  w-60 " src={RES_IMG_URL+ info?.imageId} alt="res-logo"></img>
           </div> 
          
        </div>
    )
}


export default MenuList;