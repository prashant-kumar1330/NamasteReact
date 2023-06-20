import React, { Children, Profiler, Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import AppLayout from "./Components/AppLayout";
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Error from "./Components/Error";
import About from "./Components/About";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import RestrauntsDetails from "./Components/RestrauntDetails";
import Profile from "./Components/Profile";
import Profilecls from "./Components/ProfileClass";
//import Instamart from "./Components/Instamart";


/*
 *chunking
 *code splitting
 *Dynamic Bundling
 *on demand loading
 *Dymanic import

 these are all same concept we just separete our bundle for bigger components to reduce the load 
 due a big single js file , so it will load that required bundle when user click on it
*/


const Instamart = lazy (() => import("./Components/Instamart"))










// const root= document.getElementById("root");
        // const  heading = document.createElement("h1");
        // heading.innerText= "Namaste react !!!";
        // root.appendChild(heading);

/*
 <div id=parent> 
     <div id = child>
       <h1>i m h1 tag</h1>
       <h2>i m h2 tag</h2>
     </div>
 </div>
*/




//react way
 //const heading = React.createElement("h1",{id:"heading"},"hello from React !!!");
 //react.createElement eill always return react object
 //console.log(heading);

//const h1tag = React.createElement("h1", {id:"h1"}, "i m h1 tag");
//const h2tag = React.createElement("h2", {id:"h2"}, "i m h2 12121 tag");

//const parentDiv =React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, [h1tag,h2tag] ))

//  const jsxElement = <h1>hello from jsx :) </h1>;
//  const Title = ()=>{
//   return (
//     <div>
//       <h1>hello this is title</h1>
//     </div>
//   )
//  }
 
//  console.log(Title);


//  const Jsxcomponet = ()=>{
//   return (
//    <div>
//     <h1>{console.log("ffff")}</h1>
//     <Title/>
//     <h1>hello from react component</h1>
//    </div>
//   )
//  }
/*
nav => logo , nav-items
*/


// const styleCard = {
//   fontSize: "20px"
// };






const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/about",
        element: <About/>,
        children: [
          {
            path:"profile",  
            element: <Profilecls name= {"Prashant"}/>
          }
        ]
       },
       {
        path: "/",
        element: <Body/>
       },
       {
        path: "/contact",
        element: <Contact/>
       },
       {
        path: "/restraunt/:id",
        element: <RestrauntsDetails/>
       },
       {
        path: "/instamart",
        element: 
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Instamart/>
        </Suspense>
        
       }
    ]
  },
  
])



 const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(<RouterProvider router={appRouter}/>); // this will replace all the elements of root

