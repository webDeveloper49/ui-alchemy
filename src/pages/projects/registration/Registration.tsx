import React from "react";
    
function Registration(){
    const fnameRef=React.useRef();
    const lnameRef=React.useRef();
    const courseRef=React.useRef();
    const placeRef=React.useRef();
    const dobRef=React.useRef();
    const addstudentRef=React.useRef();
    const [users,setUsers]=React.useState([]);
    const [user,setUser]=React.useState({
        firstname:"",
        lastname:"",
        course:"",
        place:"",
        dob:""
    });
    
    function handleinput(event){
        setUser({...user,[event.target.name]:event.target.value});
        if(event.target.name==='firstname'){
            if(event.key==="Enter"){
                lnameRef.current.focus();
            }
        }
        if(event.target.name==='lastname'){
            if(event.key==="Enter"){
                courseRef.current.focus();
            }
        }
        if(event.target.name==='course'){
            if(event.key==="Enter"){
                placeRef.current.focus();
            }
        }
        if(event.target.name==='place'){
            if(event.key==="Enter"){
                dobRef.current.focus();
            }
        }
        if(event.target.name==='dob'){
            if(event.key==="Enter"){
                addstudentRef.current.focus();
            }
        }
    }
    function addstudent(){
        setUsers([...users,user]);
        setUser({
            firstname:"",
            lastname:"",
            course:"",
            place:"",
            dob:""
        });
    }
    return(
        <div>

        <div>
        <input type="text" name="firstname" placeholder="firstname" onKeyUp={handleinput} ref={fnameRef}/>
        <br/>
        <input type="text" name="lastname" placeholder="lastname" onKeyUp={handleinput} ref={lnameRef}/>
        <br/>
        <input type="text" name="course" placeholder="course" onKeyUp={handleinput} ref={courseRef}/>
        <br/>
        <input type="text" name="place" placeholder="place" onKeyUp={handleinput} ref={placeRef}/>
        <br/>
        <input type="text" name="dob" placeholder="date of birth" onKeyUp={handleinput} ref={dobRef}/>
        <br/>
        <button onClick={addstudent} ref={addstudentRef}>Add Student</button>
        </div>

        <div>
            <table border="1" cellSpacing="0" cellPadding="10" width="50%" align="center">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Course</th>
                        <th>Place</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            (student,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{student.firstname}</td>
                                            <td>{student.lastname}</td>
                                            <td>{student.course}</td>
                                            <td>{student.place}</td>
                                            <td>{student.dob}</td>
                                        </tr>
                                    )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>

        </div>

    )
}
export default Registration;