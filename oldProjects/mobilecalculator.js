import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class MobileCalculator extends React.Component {
    constructor(){
        super();
        this.state={
            operands:[],
            operator:null,
            result:null
        };
        this.ar=[];
        this.numbers=[1,2,3,4,5,6,7,8,9,0];
        this.operators=['+','-','*','/'];
    };
    componentDidUpdate(){
        document.getElementById("display").classList.remove("invisible");
    }
    static getDerivedStateFromProps(props,state){
        this.result(state);
        
    }
    assign(digit){
        if(this.state.operator===null){
            
            let value=(this.state.operands[0]*10)+digit;
            this.ar.push(value);
            this.setState({...this.state,operands:ar});
        }
        else{
            let value=(this.state.operand2*10)+digit;
            this.setState({...this.state,operand2:value});
        }
    }
    operator(value){
        this.setState({...this.state,operator:value})
    }
    result(x){
        let results=0;
        switch(x.operator){
            case "+":
                results=x.operand1+x.operand2;
                break;
            case "-":
                results=x.operand1-x.operand2;
                break;
            case "*":
                results=x.operand1*x.operand2;
                break;
            case "/":
                results=x.operand1/x.operand2;
                break;
            default:
                results=0;
        }
        this.setState({...this.state,result:results});

    }
    clear(){
        this.setState({
            operand1:null,
            operand2:null,
            operator:null,
            result:null
        })
    }
    
    render() {
        return (
        <div className='container'>
            <div className='row border border-1 border-success'>
                <div id='display' className="invisible w-75 mx-auto mt-2 p-2">
                    <div>
                        <span>{this.state.operand1}</span>&nbsp;
                        <span id="operator" className=''>{this.state.operator}</span>&nbsp;
                        <span>{this.state.operand2}</span>
                    </div>
                    <div>{this.state.result}</div>
                </div>
            </div>
            <div className='row'>
                
                <ul className="col-9 list-group list-group-none">
                    <div className='row'>
                        {
                        this.numbers.map((value,index)=>{
                            return(
                            <li key={value} className='col list-group-item border-0 w-25'>
                                <button className="border-0  bg-light" onClick={()=>{this.assign(value)}}>{value}</button>
                            </li>
                            )
                        })
                        }
                    <li className='col list-group-item border-0 w-25'><button className="border-0  bg-light" onClick={()=>{this.result(this.state)}}>=</button></li>
                    <li className='col list-group-item border-0 w-25'><button className="border-0  bg-light" onClick={()=>{this.clear()}}>clc</button></li>
                    </div>
                </ul>
                                
                <ul className="col-3 list-group list-group-none">
                    {
                        this.operators.map((value,index)=>{
                            return (
                                <li key={index} className='list-group-item border-0'>
                                    <button className='bg-light border-0' onClick={()=>{this.operator(value)}}>{value}</button>
                                </li>
                            )
                        })
                    }
                </ul>
                
            </div>
            
        </div>
        )
    }
}
export default MobileCalculator;