import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate,Outlet } from 'react-router-dom'

import {changeStatus} from "../../app/slices/loginSlice"

function Login(props) {
    console.log(props)
    let navigate=useNavigate();
    const [user,setUser]=useState({username:"",password:""})
    console.log(user)
    const handleusername=(event)=>{
        setUser((olduser)=>{
            return {...olduser,username:event.target.value}
            }
        )
    }
    const handlepassword=(event)=>{
        setUser((olduser)=>{
            return {...olduser,password:event.target.value}
            }
        )
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        props.changestatus();
        if(props.loginStatus){
            navigate("/projects")
        }
    }
    return (
        <div className='w-100 bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div id="loginSection" className='w-75 h-75 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='text-secondary fw-bold'>Welcome</h1>
                <div className='d-flex flex-column align-items-center'>
                    <h4 className='text-success'>login to view projects</h4>
                    <input className='form-control' type="text" name="username" placeholder="username" onKeyUp={handleusername}/>
                    <br/>
                    <input className='form-control' type="password" name="password" placeholder="password" onKeyUp={handlepassword}/>
                    <br/>
                    <button  className='btn btn-primary px-3' type="submit" onClick={handlesubmit}>Login</button>   
                </div>
            </div>
            <Outlet/>
        </div>
        
    )
}
function mapStateToProps(store){
    return store.login;
}
function mapDispatchToProps(dispatch){
    return {
        changestatus:()=>{dispatch(changeStatus())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)