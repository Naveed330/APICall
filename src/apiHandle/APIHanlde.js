import { useState , useEffect} from 'react'
function APIHanlder () {
    async function apihandler () {
        let data = "";
        let items =  await fetch ("https://fakestoreapi.com/products" , {
            method: 'POST',
            body : JSON.stringify(data),
            headers: {
                contentType: 'application/json',
                accept: 'application/json',
            }
        })
        items = await items.json();
        console.log("items",items);
        localStorage.setItem('use-data' , JSON.stringify(items));
    }
    const postHandler = () => {
        // useEffect (()=>{
        //     const url = "";
        //     fetch(url).then
        // })
    }
    return (
        <>
        <h1>API Hanlder</h1>
        <button onClick={apihandler} >Fetch Data</button>
        <button onClick={postHandler} ></button>
        </>
    )
}
export default APIHanlder;