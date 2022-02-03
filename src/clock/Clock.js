import { useState} from 'react'
function Clock(){
    let time = new Date().toLocaleTimeString();
    const [ctime , setTime]= useState(time)
    console.log("ctime",ctime);
    const updateTime = ()=>{
        let time = new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(updateTime,1000)
    return (
        <>
        <h1> {ctime} </h1>
        </>
    )
}
export default Clock;