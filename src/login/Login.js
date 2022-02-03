import {react, useState} from 'react'
function Login(){
    const [Email ,setEmail] = useState('');
    const [Password ,setPassword] = useState('');
    const [is_social , setissocial]=useState(0);
    const [phone_number , setPhoneNumber] = useState(0);
    const [phone_code , setPhoneCode] = useState(0);

    async function ctahandler(e){
        e.preventDefault();
        let inputs = {Email , Password , phone_number , phone_code, is_social};
        console.log('inputs',inputs);
        let result = await fetch('http://45.56.122.34/sellx/api/auth/login' , {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
        result = await result.json();
        console.log('result' , result);
        localStorage.setItem('User-info' , JSON.stringify(result));
    }

    function ctaemailhandler (e){
        setEmail(e.target.value);
        // console.log('Email',e);
    }
    function ctapasswordhandler(e){
        setPassword(e.target.value);
        // console.log('Password',e);
    }
    function ctaphonehandler (e){
        setPhoneNumber(e.target.value);
        // console.log('Phone Number',e);
    }
    // function ctaphoneCodehandler(e) {
    //     setPhoneCode(e.target.value);
    // }
    return (
        <>
            <h1>Login</h1>
            <form action="">
                <input type="text" value={Email} placeholder="Enter your Email"  onChange={ctaemailhandler} /><br/><br/>
                <input type="password" value={Password} placeholder="Enter your password" onChange= {ctapasswordhandler} /><br/><br/>
                <input type="Number" value={phone_number} placeholder="Enter your Mobile Number" onChange= {ctaphonehandler} /><br/><br/>
                {/* <input type="Number" value={phone_code} onChange= {ctaphoneCodehandler} /><br/><br/> */}
                <button onClick={ctahandler} >Login</button>
            </form>
        </>
    )
}
export default Login;