import './App.css';
import Home from './home/Home'
import Signup from './signup/Signup'
import Login from './login/Login'
import Todo from './todo/Todo'
import Navbar from './navbar/NavBar'
import HooksReact from './hooks/Hooks'
import Masking from './masking/Masking'
import FetchData from './axious/Axious'
import Validation from './form/Form'
import FormikValidation from './formik/Formikvalidation'
import APIHanlder from './apiHandle/APIHanlde'
import ObjectMethod from "./objectMethod/Object"
import ArrayMethod from "./arrayMethod/Array"
import MaterialUi from "./materialUI/MaterialUI"
import EditFunctionality from './EditFunctionality/EditFunctionality';
import Slider from "./slider/Slider"
import NewGenz from './NewGenz/NewGenz';
function App() {
 const employee={
        empCode: "119",
        Name: "Test employee",
        age: "25",
        email: "abc@abc.com",
        location: "Hyderabad."
}

  return (
   <>
     {/* <Home/> */}
     {/* <Signup/> */}
     {/* <Login/> */}
     {/* <FetchData/> */}
     {/* <Navbar name='naveed'/> */}
     {/* <Todo/> */}
     {/* <HooksReact/> */}
     {/* <Masking/> */}
     {/* <Validation/> */}
     {/* <FormikValidation/> */}
     {/* <APIHanlder/> */}
     {/* <ObjectMethod/> */}
     {/* <ArrayMethod abc= {employee} /> */}
     {/* <MaterialUi/> */}
  {/* <EditFunctionality/> */}
  {/* <Slider/> */}
  <NewGenz/>
   </>
  );
}

export default App;
