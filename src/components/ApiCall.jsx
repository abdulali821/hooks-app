import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {baseURL} from '../constants/Config'

function ApiCall() {
    const [data, setData] = useState([]);
  const url = `${baseURL}/posts`;
  useEffect(()=>{
    axios.get(url).then((response)=>{
        const allNotes = response.data;
        setData(allNotes);
    })
    .catch((error)=>{
        console.error(error);
    });
  },[])
  return <>
    {data.map((e,i)=>{
       return <p key={i}>
        {(JSON.stringify(e.id))}<br />
        {(JSON.stringify(e.title))}<br /> 
        {(JSON.stringify(e.body))}<br />
       </p>
    })}
  </>
}

export default ApiCall