import React, { useState } from 'react'

function Input({data}) {
    const [input, setInput] = useState({
        id: "",
        name: "",
        email: ""
    });
    function showOutput(){
        data(input);
        return setInput({id: "",name: "",email: ""});
    }

  return (
    <div>
        <form onSubmit={showOutput} value>
        <div>
            <input value={input.id} onChange={(e)=>{
            setInput({...input,id: e.target.value});
        }} type="text" required/>
        <input value={input.name} className='input' onChange={(e)=>{
            setInput({...input,name: e.target.value});

        }} type="text" required/>
        <input value={input.email} className='input' onChange={(e)=>{
            setInput({...input,email: e.target.value});
        }} type="text" required/>
        <button type="submit" id='btn'>Submit</button>
        </div>
    </form>
    </div>
  )
}

export default Input