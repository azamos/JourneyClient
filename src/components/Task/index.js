import React,{useState,useEffect} from "react";
import DEV_DB from '../../constants';

const Task = props => {
    /*
        subtasksIds is a prop given by a Task component.
        Task only have a list of ids of the subtasks, but not the Subtasks data itself.
        Thus, subtasks fill that role, by requesting it from the server.
    */
    const {data} = props;
    const {title,description,id,dueDate,priority,severity} = data;
    const [subtasks,setSubtask] = useState([]);
    useEffect(()=>{
        fetch(`${DEV_DB}/subTasks/${id}`)
        .then(res=>res.json())
        .then(res=>setSubtask(res))
        .catch(err=>console.log(err))
    },[]);

    return (
        <div className="BorderedTop">
            <h1>Task Title: {title}</h1>
            <h2>Task Details: {description}</h2>
            <h3>Due to: {dueDate}</h3>
            <h3>priority:{priority}</h3>
            <h3>severity:{severity}</h3>
            <div className="subTasks">
                {subtasks.forEach(st=><div key={st.id} data={st}></div>)}
            </div>
        </div>
    );
}

export default Task;