import React from 'react'
import {connect} from "react-redux"
import {updateAddon, updateScore, updateWickets} from "../../../app/slices/cricketscoreSlice"

function CricketScore(props) {
    return(
        <div className='container w-75'>
            <h1>Cricket Live Scores</h1>
            <h2 className='bg-warning text-light rounded-2 p-2'>{props.score}<b>/</b>{props.wicket}</h2>
            <p className='bg-light p-2 rounded-2 text-dark'>{props.display}</p>

            <ul className='list-group list-group-horizontal w-100'>
                {props.array.map((value,index)=>{
                    return (
                        <li key={index} className='flex-fill list-group-item p-0 m-1 rounded-3'>
                            <button className='btn btn-danger w-100' onClick={()=>{props.update_Score(value)}}>{value}</button>
                        </li>
                    )})
                }
            </ul>
    
            <ul className='list-group list-group-horizontal w-100'>
                {props.addonwics.map((value,index)=>{
                    return (
                        <li key={index} className='flex-fill list-group-item p-0 m-1 rounded-3'>
                            <button className='btn btn-success w-100 text-light' onClick={()=>{props.update_Wickets(value)}}>{value}</button>
                        </li>
                    )})
                }
                {props.addonscores.map((value,index)=>{
                    return (
                        <li key={index} className='flex-fill list-group-item p-0 m-1 rounded-3'>
                            <button className='btn btn-success w-100 text-light' onClick={()=>{props.update_Addon(value)}}>{value}</button>
                        </li>
                    )})
                } 
            </ul>
        </div>
    )
}
function mapStateToProps(store){
    return store.cricketscore;
}
function mapDispatchToProps(dispatch){
    return {
        update_Score:(v)=>{dispatch(updateScore(v))},
        update_Wickets:(v)=>{dispatch(updateWickets(v))},
        update_Addon:(v)=>{dispatch(updateAddon(v))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CricketScore)