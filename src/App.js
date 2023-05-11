import './App.css';
import { useState,useEffect } from 'react';
import Journey from './components/Journey';
import DEV_DB from './constants';

const App = () => {
  const [journeys,setJourneys] = useState([]);
  useEffect(()=>{
    fetch(`${DEV_DB}/journeys`)
    .then(res=>res.json())
    .then(res=>{setJourneys(res);})
    .catch(err=>console.log(err))
  },[]);

  return (
    <div className='App'>
      <div className='JourneysContainer'>
        {journeys.map(journey=><Journey key={journey.id} data = {journey}/>)}
      </div>
    </div>
  );

};

export default App;
