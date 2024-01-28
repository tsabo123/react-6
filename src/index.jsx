import React, {Component} from "react";
import ReactDom from "react-dom/client";



class App extends Component{
    

    

    render () {
        const x = 20;
        const y=5;
        return (
            
           <div>
            <p>გამარჯობა სამყარო</p>
                {
                `ჯამი :${x+y}`
                }
            <br/>
                {
                `სხვაობა :${x-y}`
                }

            <br/>
                
                {
                `გაყოფა :${x/y}`
                }
            <br/>
                {
                `ნამრავილი :${x*y}`
                }
             
               
            
          </div>
                
        );

    }
}

var root = document.getElementById("root");
ReactDom.createRoot(root).render (<App />);