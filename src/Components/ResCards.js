import { Component } from "react";
import  {RES_IMG_URL}  from "../Utils/utils";

const ResCard2= (props)=>{
 
    const {resData} = props;
   return (
    <div className="resCard">
    <img className="res-image" src={RES_IMG_URL+ resData.data.cloudinaryImageId}></img>
    <h3>{resData.data.name}</h3>
    <p>
     { resData.data.cuisines.join(",")}
    </p>
     <p>{resData.data.avgRating}</p>
     <p>{resData.data.minDeliveryTime + "MINS"}</p>
  </div>
   )
  }




  class ResCard extends Component{
  
     constructor (props){
        super(props);
     }
     
     render(){
        const {resData} = this.props;
        return (
            <div className="resCard w-80 px-10 py-5">
            <img className="res-image w-80" src={RES_IMG_URL+ resData.data.cloudinaryImageId}></img>
            <h3 className="font-bold">{resData.data.name}</h3>
            <p className="text-ellipsis overflow-hidden ...">
             { resData.data.cuisines.join(",")}
            </p>
             <p>{resData.data.avgRating}</p>
             <p>{resData.data.minDeliveryTime + "MINS"}</p>
          </div>
         )
     }

  }

  export default ResCard;