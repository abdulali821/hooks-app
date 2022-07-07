import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {baseURL} from '../constants/Config'

function ApiCall() {
    const [data, setData] = useState([]);
  const url = `${baseURL}/posts`;
  useEffect(()=>{
    const fetchPost = async () => {
         const response = await axios(url);
         console.log(response.data);
      };
      fetchPost();
  },[])
  return <ul>
    {data.map((e,i)=>{
       return <li key={i}>
        <h3>{((e.id))}</h3><br />
        <h4>{((e.title))}</h4><br /> 
        <h5>{((e.body))}</h5><br />
       </li>
    })}
  </ul>
}

export default ApiCall