import { Component } from "react"
import userContext from "../Utils/userContext"
class Profilecls extends Component{
   
  constructor (props){
    super(props)
    console.log("in the constructor")
    this.state= {
        userData: {}
      
    }
  } 
   
 async componentDidMount(){
    console.log("component did mount is called");
     const data= await fetch("https://api.github.com/users/prashant-kumar1330");
     const userData_g = await data.json();
     console.log(userData_g);
     this.setState({
        userData:userData_g
     })

  }

  render(){
    console.log("render called")
    const {avatar_url,bio,name} = this.state.userData;

    return (
        <div>
             <img src={avatar_url}></img>
            <h1>{bio}</h1>
            <h1>{name}</h1>
           <userContext.Consumer>
            {(value)=>
             <h1>{value.user.email}</h1>
            }
            </userContext.Consumer>
             
        </div>
    )
  }

}

export default Profilecls;