import React,{useState,useEffect} from "react";
import Task from '../Task';

import DEV_DB from '../../constants';

const Quest = props => {
    /*
        tasksIds is a prop given by a Quest component.
        Quest only have a list of ids of the tasks, but not the Tasks data itself.
        Thus, tasks fill that role, by requesting it from the server.
    */
    const {data} = props;
    const {title,description,id,dueDate} = data;
    const [tasks,setTasks] = useState([]);
    useEffect(()=>{
        fetch(`${DEV_DB}/Tasks/${id}`)
        .then(res=>res.json())
        .then(res=>setTasks(res))
        .catch(err=>console.log(err))
    },[]);

    return (
        <div className="BorderedTop">
            <h1>Quest Title: {title}</h1>
            <h2>Quest Details: {description}</h2>
            <h3>Due to: {dueDate}</h3>
            <div className="Tasks">
                {tasks.map(t=><Task key={t.id} data={t}/>)}
            </div>
        </div>
    );
}

export default Quest;