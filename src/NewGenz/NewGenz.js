import React , {useState , useEffect} from 'react';
import axios from "axios";

const BtnHandler = () => {
    // let Edit_Password = "https://new-genzn.herokuapp.com/api/v1/edit-password/"
    // axios.post(Edit_Password)
    // .then((res)=>console.log("EditPasswordResponse",res))
    // .catch((error)=>console.log("EditPasswordError",error.message))
    let update_employer_profile = "https://new-genzn.herokuapp.com/api/v1/update-employer-profile/1"
    axios.get(update_employer_profile)
    .then(response => console.log("UpdateEmployer",response.data))
    .catch(error => console.log("ErrorEmployer",error))

}

const NewGenz = () => {
  return <div>
      <h1>NewGenz API</h1>
      <button onClick={BtnHandler}>Click TO Fetch Data</button>
  </div>;
};

export default NewGenz;
