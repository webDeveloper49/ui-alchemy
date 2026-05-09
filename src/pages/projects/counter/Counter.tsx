import React from 'react';
import "./Counter.scss"
import { connect } from 'react-redux';
import { inc,dec,reset } from '../../app/slices/counterSlice';

function Counter(props) {
    return (
        <div className="counter">
            <h1 className="counter__title">Counter: {props.count}</h1>
            <div className='counter__buttons'>
                <button className="counter__buttons__button" onClick={()=>{props.increment()}}>Increment</button>
                <button className="counter__buttons__button" onClick={()=>{props.resetcount()}}>Reset</button>
                <button className="counter__buttons__button" onClick={()=>{props.decrement()}}>Decrement</button>
            </div>
            
        </div>
    )
}

function mapStateToProps(store){
return store.counter
}
function mapDispatchToProps(dispatch){
return {
    increment:()=>{dispatch(inc())},
    decrement:()=>{dispatch(dec())},
    resetcount:()=>{dispatch(reset())}
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);