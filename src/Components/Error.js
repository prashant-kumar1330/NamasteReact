import errorLogo from "../../error.png"
import { useRouteError } from "react-router-dom";
const Error = ()=>{
const err= useRouteError();
 console.log(err);
    return  (
        <div>
            <h1>Opps!!!</h1>
            <h1>Something went wrong</h1>
             <h1>{err.status  +" "+  err.statusText}</h1>
            <img src={errorLogo}></img>
        </div>
    )
}


export default Error;