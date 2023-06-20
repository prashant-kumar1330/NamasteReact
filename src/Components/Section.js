

const Section = (props)=>{
  
   return  (
    <div className="border border-zinc-950 p-2 m-2">
        <h1 className="font-bold">{props.title}</h1>

        <button className="font-bold" onClick={()=>{
           props.setIsvisble();
          if(props.isVisible){
            console.log("unsetting")
            props.unset();
          }
          
        }}>{props.isVisible?"hide":"show"}</button>
        {props.isVisible &&   <p>
            {props.description}
        </p>}
    </div>
   )
}

export default Section;