import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {baseURL} from '../constants/Config'

function ApiCall() {
    const [data, setData] = useState([]);
  const url = `${baseURL}/posts`;
  async function getApi(){
        try{
        const res = await axios(url);
        setData(res.data);
        }
        catch(err){
            console.log(err)
        }
    }
  useEffect(()=>{
    getApi();
  },)
  return <>
    {data.map((e,i)=>{
       return <div key={i}>
        <li>{(JSON.stringify(e.id))}</li><br />
        <li>{(JSON.stringify(e.title))}</li><br /> 
        <li>{(JSON.stringify(e.body))}</li><br />
       </div>
    })}
  </>
}

export default ApiCall