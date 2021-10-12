import React from 'react';
import "../App.css";
import {sidebarData} from "./sidebarData";

function sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
            {sidebarData.map((val,key) =>{
                return(
                <li 
                key={key} 
                className="row"
                id={window.location.pathname == val.link ? "active": ""}
                onClick={()=>{window.location.pathname = val.link}}>
                {""}
                {/* <div>{val.icon}</div>{""} */}
                <div>{val.title}</div>{""}
               

                
                </li>
            ); 
            
        })}
           </ul>
        </div>
    
    )
}

export default sidebar
