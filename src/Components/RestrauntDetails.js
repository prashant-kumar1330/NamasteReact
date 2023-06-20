import { useParams } from "react-router-dom";
import MenuList from "./MenuList";
import useRestaurantMenu  from "../Utils/useRestaurantMenu";

const RestrauntsDetails = ()=>{
    const params = useParams();
    const menu = useRestaurantMenu (params.id);
    
    //const[menu, setMenu] = useState([]);
   if(menu.length===0){
    return (
        <div>
            Loading...
        </div>
    )
   }
    console.log(params);
    return (
       menu?.map((resMenuitem,index)=>{
        return <MenuList key={index} menuInfo={resMenuitem} />
       })
    )
}

export default RestrauntsDetails;