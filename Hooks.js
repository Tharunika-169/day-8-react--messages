import React,{useState,useEffect} from 'react';

function Hooks()
{
    const [message,setMessage]=useState("Hello all ! How are you ?")
    useEffect(()=>{
        console.log("use effect hook called")
        setTimeout(()=>{
            setMessage("We are good")
        },2000)
    })
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default Hooks;