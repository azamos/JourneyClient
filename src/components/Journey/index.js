import React,{useState,useEffect} from "react";
import Feat from "../Feat";

import DEV_DB from '../../constants';

const Journey = props => {
    /*
        featsIds is a prop given by a Journey component.
        Jorney only have a list of ids of the Feats, but not the Feats data itself.
        Thus, feats fill that role, by requesting it from the server.
    */
    const {data} = props;
    const {title,description,id} = data;
    const [feats,setFeats] = useState([]);
    useEffect(()=>{
        fetch(`${DEV_DB}/Feats/${id}`)
        .then(res=>res.json())
        .then(res=>setFeats(res))
        .catch(err=>console.log(err))
    },[]);

    return (
        <div className="JourneyContainer">
            <h1>Journey: {title}</h1>
            <h2>Details: {description}</h2>
            <div className="Feats">
                {feats.map(ft=><Feat key={ft.id} data={ft}  />)}
            </div>
        </div>
    );
}

export default Journey;