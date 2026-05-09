import React,{ useState,useEffect } from 'react';
import './Todolist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp,faUndo} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux';
import {addTodo, deleteTodo, toggleStatus} from '../../../app/slices/todolistSlice';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

function TodoList(props) {
    console.group('todolist Props');
    console.log(props)
    const [task, settask] = useState({id:uuidv4(), title:"", status:false});
    const [filteredtodos, setfilteredtodos] = React.useState([]);
    const [filterKey, setfilterKey] = React.useState('All');
    const clearTask=()=>{
        settask({id:uuidv4(), title:"", status:false});
    }
    function handleTask(event){
        settask({...task,title:event.target.value});
    }
    useEffect(()=>{
        if(filterKey==="All"){
            setfilteredtodos([...props.todos]);
        }
        if(filterKey==='Completed'){
            let temp=props.todos.filter((task)=>{
                return task.status===true
            })
            setfilteredtodos([...temp]);
        }
        if(filterKey==='NotCompleted'){
            var temp=props.todos.filter((task)=>{
                return task.status===false
            })
            setfilteredtodos([...temp]);
        }

    },[props.todos,filterKey])
    console.groupEnd('todolist Props');
    return (
    <div className='todo container'>
        <h1 className='todo__title'>Todo List({props.todos.length})</h1>
        <input  type='text' id='input_task'onChange={handleTask}/>
        <button className='todo__add' onClick={()=>{props.add_todo(task);
                    document.getElementById("input_task").value='';clearTask()}}>Add Task</button>
        <div className='todo__filters'>
            <div className="todo__filters_name"><input type='radio' name="filter" onChange={(event)=>{setfilterKey(event.target.value)}}  value='All'/><span>All</span></div>
            <div className="todo__filters_name"><input type='radio' name="filter" onChange={(event)=>{setfilterKey(event.target.value)}}  value='Completed'/><span>Completed</span></div>
            <div className="todo__filters_name"><input type='radio' name="filter" onChange={(event)=>{setfilterKey(event.target.value)}}  value='NotCompleted'/><span>NotCompleted</span></div>
        </div>
        <ul className='todo__list'>
            {
                filteredtodos.map((task)=>{
                    return(
                        <li key={task.id} className="todo__list__item">
                            <span className='todo__list__item__title'>{task.title}</span>
                                {task.status?
                                        <FontAwesomeIcon icon={faUndo} className='todo__list__item__button' onClick={()=>{props.toggle_status(task)}}></FontAwesomeIcon>:
                                        <FontAwesomeIcon icon={faThumbsUp} className='todo__list__item__button' onClick={()=>{props.toggle_status(task)}}></FontAwesomeIcon>}
                            <FontAwesomeIcon icon={faTrashCan} className='todo__list__item__delete' onClick={()=>{props.delete_todo(task)}}></FontAwesomeIcon>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
function mapStateToProps(store){
    return store.todolist;
}
function mapDispatchToProps(dispatch){
    return {
        add_todo:(task)=>{dispatch(addTodo(task))},
        delete_todo:(task)=>{dispatch(deleteTodo(task))},
        toggle_status:(task)=>{dispatch(toggleStatus(task))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)