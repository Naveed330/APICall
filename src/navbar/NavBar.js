import {useState , useEffect} from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import './NavBarStyle.css'
function Navbar(props){
    // const [Loading , setLoading] = useState(false);

    // useEffect(()=>{
    //     setLoading(true);
    //     setTimeout(()=>{
    //         setLoading(false);
    //     } ,1000)
    // },[])

    return(
        <>
        {/* {
            Loading 
            ? 
            <BeatLoader color={"#000000"} loading={Loading} size={20} />
            : 
             <h1> {props.name } </h1>
        } */}
            <h1>Navbar</h1>
          <div className='main_div-s'>
              <div className="div"></div>
          </div>
        </>
    )
}
export default Navbar;