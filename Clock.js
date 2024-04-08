import React,{useState}from 'react'
const Clock =()=>
{
    let [time,SetTime] = useState()
    setInterval(()=>
    {
        
        let a = new Date().toLocaleTimeString()
        SetTime(a)
    })
    

    return (
        <div  style={{marginLeft:'40%', marginTop:'11%', fontSize:'xlarger'}}  >
            <h1 style={{color: "red"}}>Real Time India </h1>
            Clock
            {
                time
            }
        </div>
    )
}

export default Clock