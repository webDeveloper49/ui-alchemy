import React from "react"
function ArrowComponent(props){
    return(
            <th>
                <span>
                    {props.header}
                </span> 
                <span>
                    <button id={props.header+"01"} onClick={props.sort}><i className="fa-solid fa-angle-up"></i></button>
                    <button id={props.header+"02"} onClick={props.sort}><i className="fa-solid fa-angle-down"></i></button>
                </span>
                
            </th>
    )
}   
export default ArrowComponent;  