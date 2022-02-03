import { useState, useEffect} from 'react'
const HooksReact =()=>{
    const [Count , setCount] = useState(0);

    const ctahandler = () => {
        setCount(Count + 1);
    }
    // useEffect(()=>{
    //     console.log('UseEffcet is Called');
    // })

    useEffect(()=>{
        console.log('UseEffcet is Called');
    },[Count])

    // useEffect(()=>{
    //     alert('UseEffcet is Called On Page Load')
    // } , [])

    return(
        <>
            <h1>Hooks</h1>
            <h1> Increment is :  {Count} </h1>
            <button onClick={ctahandler}>Increment</button>
        </>
    )
}
export default HooksReact;