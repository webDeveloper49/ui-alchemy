import React,{useState} from "react";

function DailyPlanner(){
    const [state,setState]=useState(
        {
            day:["S","M","T","W","T","F","S"],
            date:"",
            list:[]
        }
    )
    const Addmustdo=()=>{
        var newmust=prompt("enter the thing");
        setState((prevState)=>{
            return {...prevState,list:[...prevState.list,newmust]}
        });

    }
    return(
        <div>
            <h1>DAILY PLANNER</h1>
            <small>make today awesome</small> 
            <ul>
                {state.day.map((value,index)=>{
                    return (<li key={index} onClick={()=>{
                            document.getElementsByTagName("li").item(index).style.backgroundColor="red"}}>
                                {value}
                            </li>
                            )}
                    )
                }
            </ul>
            <p><b>Date :</b><input type="text" place-holder="DD-MM-YYYY" name="date"/></p>
            <h4>Must Do Today:<button onClick={()=>{Addmustdo()}}>Add</button></h4>
                
            <ul>
                {state.list.map((value,index)=>{
                    return (
                        <li key={index}>
                            <input type="checkbox" name="mustdo"/>
                            <span>{value}</span>
                            <button>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default DailyPlanner;