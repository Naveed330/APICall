import React, { useState } from "react";

const EditFunctionality = () => {
  const [add, setAdd] = useState("");
  const [items, setItems] = useState([]);
  const [editable, setEditable] = useState({});
  console.log("editable",editable);
  console.log('items',items);
  const dispatchData = () => {
    const updateList = items.map((ele) => {
      if (ele === editable) {
        console.log("success");
        return {bool:false, todo: "jatt sb" };
      }
      return ele;
    });
    setItems(updateList);
  };
  const addHandler = () => {
    if (!add) {
      alert("Plz Enter Some Thing");
    } else {
      setItems([...items, {bool:true, todo: add }]);
      setAdd("");
    }
  };
  const InputHandler = (e) => {
    console.log(e.target.value);
    setAdd(e.target.value);
  };
  const editHandler = (index) => {
    let newEditItem = items.find((e, i) => i === index);
    setEditable(newEditItem);
    const updatedList = items.map((ele) => {
        if (ele === editable) {
          console.log("success");
          return {bool:false, todo: ele.todo };
        }
        return ele;
      });
      setItems(updatedList);

  };
  return (
    <div>
      <h1>Edit functionality</h1>
      <input value={add} onChange={InputHandler} type="text" />
      <button onClick={addHandler}>ADD</button>
      {items.map((value, index) => {
        return (
          <div key={index}>
           <input type="text" disabled={value.bool===false?false:true} autoFocus value={value.todo} />
            <button onClick={() => editHandler(index)}>Edit</button>
          </div>
        );
      })}
      <button onClick={dispatchData}>dispatch</button>
    </div>
  );
};

export default EditFunctionality;
