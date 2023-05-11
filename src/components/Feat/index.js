import React,{useState,useEffect} from "react";
import Quest from "../Quest";

import DEV_DB from '../../constants';

const Feat = props => {
    /*
        questsIds is a prop given by a Feat component.
        Feat only have a list of ids of the Quests, but not the Quests data itself.
        Thus, quests fill that role, by requesting it from the server.
    */
    const {data} = props;
    const {title,description,id,dueDate} = data;
    const [quests,setQuests] = useState([]);
    useEffect(()=>{
        fetch(`${DEV_DB}/Quests/${id}`)
        .then(res=>res.json())
        .then(res=>setQuests(res))
        .catch(err=>console.log(err))
    },[]);

    return (
        <div className="BorderedTop">
            <h1>Feat Title: {title}</h1>
            <h2>Feat Details: {description}</h2>
            <h3>Due to: {dueDate}</h3>
            <div className="Quests">
                {quests.map(qs=><Quest key={qs.id} data={qs} />)}
            </div>
        </div>
    );
}

export default Feat;