import { useState , useEffect} from 'react'
import axios from 'axios'
function FetchData() {

    // useEffect(()=>{
    //     try {
    //             async function getData () {
    //             const res =  await axios.get(`https://fakestoreapi.com/products`)
    //             console.log("res",res.data.length);
    //         }
    //         getData ();
    //     } catch (error) {
    //         console.log("error" , error);
    //     }
    //  });
const APIFetchData = () => {
    useEffect(()=>{
        try {
            async function FetchData () {
                axios.post('https://new-genzn.herokuapp.com/api/v1/edit-password/' , {})
                .then(response => console.log("response",response))
            }
            FetchData();
        } catch (error) {
            console.log("error",error);
        }
    } , [])
}


    return (
        <>
        <h1>Fetch Data From API Using Axious</h1>
        <button onClick={APIFetchData} >API data</button>
        </>
    )
}
export default FetchData;