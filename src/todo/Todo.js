import { useState} from 'react' 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TodoStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faPlusCircle, faSave } from '@fortawesome/free-solid-svg-icons'
import Clock from '../clock/Clock.js'
// import { faEdit } from '@fortawesome/free-solid-svg-icons'
function Todo() {
    const [inputData , setinputData] = useState('')
    const [items , setitems] = useState([]);
    const [isToggle ,setIsToggle] = useState(true)
    const [IsEditItems, setIsEditItems] = useState(null);
    // Add Items
    function ctahandler() {
        if(!inputData){
            toast.error("Please Enter Valid Input!" , {
                position:"top-right"
            });
        }
        else if (inputData && !isToggle){
            setitems(
                items.map((elem)=>{
                    if(elem.id===IsEditItems){
                        return {...elem , name:inputData}
                    }
                    return elem;
                })
            )
            setIsToggle(true);
            setinputData('');
            setIsEditItems(null);
        }
        else{
            const allinputData = { id: new Date().getTime().toString() , name:inputData}
            console.log('allinputData',allinputData);
            setitems([...items,allinputData])
            setinputData('');
        }
    }

        // Delete Items
       const Deletebtn = (index) => {
           console.log('ID' , index);
           const deleteitems = items.filter((elem)=>{
               return index  !=  elem.id;
           })
           setitems(deleteitems);
       } 

    //    Edit Items
       const Editbtn = (id) =>{
        let newEditItems =  items.find((elem)=>{
            return elem.id === id;
        })
        console.log('newEditItems',newEditItems);
        setIsToggle(false);
        setinputData(newEditItems.name);
        setIsEditItems(id);
       }
    return(
        <>
            <h2 className='text-center'> <strong>Things to do</strong></h2>
            <h2 className='text-center'><strong>Todo App</strong></h2>
            <h2 className='text-center'> <stronge><Clock/></stronge> </h2> 
            <div className='input_tag-s'>
            <input type="text" placeholder="Enter Values Here..." required="required" value={inputData} onChange={(e)=>{
                setinputData(e.target.value);
            }}/>
            {
                isToggle ?  <button className='addbtn' onClick={ctahandler}>
                <FontAwesomeIcon icon={faPlusCircle} />
                </button> : 
                 <button className='addbtn' onClick={ctahandler}>
                 <FontAwesomeIcon icon={faSave} />
                 </button>
            }
             </div>
            <div className='main_class-s'>
                {items.map((elem)=>{
                    return (<>
                        <div className='btn-class-s' key={elem.id}> 
                        <span className='row' style={{background:'yellow'}}>
                            <h4 className='col-6 text-wrap'style={{background:'yellow'}} > {elem.name} </h4>
                            <button  className='col-3 btn deleteicon-s' onClick={()=>Deletebtn (elem.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <button  className='col-3 btn editicon-s' onClick={()=>Editbtn (elem.id)}>
                            <FontAwesomeIcon icon={faEdit} />
                            </button>
                         </span>
                        </div>
                       
                 </>)
                })}
            </div>
            <ToastContainer />
        </>
    )
}
export default Todo;