import {useEffect , useState} from 'react'
import axios from 'axios'
function Home() {

        // const fetchApi = async ()=>{
        //     try {
        //         let res = await axios.get("https://www.swagbucks.com/feeds/JEY4IXI79G/merchants.json")
        //         console.log('res',res);
                
        //     } catch (error) {
        //         console.log('error',error.message);
        //     }
        // }
        const [datalist ,setdatalist] = useState([]);

            useEffect(()=>{
                fetch('https://fakestoreapi.com/products')
                // fetch('https://www.swagbucks.com/feeds/JEY4IXI79G/merchants.json')
                .then(response => response.json())
                .then(data => setdatalist(data));

            },[])
    return(
        <>
            { datalist.map((e)=>{
                return (
                    <div> 
                    <h1>Fetch Data From API </h1>
                    <h3>Title</h3>
                    {e.title} <br/>
                    <h3>Category</h3>
                    {e.category} <br/>
                    <h3>Description</h3>
                    {e.description} <br/>
                   </div>
                )
            })}
        
    </>  )
      
          
}
export default Home;