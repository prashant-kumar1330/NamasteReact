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

const h1tag = React.createElement("h1", {id:"h1"}, "i m h1 tag");
const h2tag = React.createElement("h2", {id:"h2"}, "i m h2 tag");

const parentDiv =React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, [h1tag,h2tag] ))

 


 const root = ReactDOM.createRoot(document.getElementById("root"));
 console.log(root);
 root.render(parentDiv);