import {react,useState} from 'react';
import {useHistory} from 'react-router-dom'
function Signup() {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [is_social , setissocial] = useState(0)
    async function ctahandler(e){
    e.preventDefault();
    let items = {name , password ,email ,is_social};
    console.log('items',items);
    let result = await fetch('http://45.56.122.34/sellx/api/auth/signup' , {
        method: 'POST',
        body: JSON.stringify(items),
        headers:{
            'Content-Type':'application/json',
            "Accept":"application/json"
        }
    })
    result = await result.json();
    localStorage.setItem("user-info" , JSON.stringify(result));
    // history.push('/Login')
   
    }
    function ctanamehandler (e) {
    setName(e.target.value);
    // console.log('e',e);
    }
    function ctapasswordhandler (e) {
    setPassword(e.target.value);
    // console.log('e',e);
    }
    function ctaemailhandler (e) {
    setEmail(e.target.value);
    // console.log('e',e);
    }

    return(
        <>
                <h1>Signup</h1>
                <input type="text" onChange={ctanamehandler} value={name} placeholder="Enter Your Name" /> <br/><br/>
                <input type="password" onChange={ctapasswordhandler} value={password} placeholder="Enter Password" /> <br/><br/>
                <input type="Email" onChange={ctaemailhandler} value={email} placeholder="Enter Your Email" /> <br/><br/>
                <button onClick={ctahandler}>SignUp</button>
          
        </>
    )
}
export default Signup;