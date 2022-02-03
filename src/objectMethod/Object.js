function ObjectMethod() { 
    // const Vehicle = {
    //     Car : "Cultus",
    //     Modal : 2021,
    //     Price : "2M",
    //     funName: function () {
    //        console.log("In Function");
    //     },
    //     FF:[
    //         {
    //           gg:'77'
    //         },
    //         {
    //           kk:'rt'
    //         }
    //     ]
    // }
    // console.log("Object",Vehicle.funName());
    // Object.assign()
    //Object.assign() Merge and overwrite equal keys
    const ctaHandler = () => {
    // let a = {
    //     num : 1,
    //     num : 2,
    //     num : 3,
    // }
    // const b = Object.assign(a);
    // console.log("b",b);
     // Object.assign() Clone an object
    // let object1 = {number:1};
    // let object2 = {person : "Hi"};
    // let clone = Object.assign(object1,object2);
    // console.log("clone",clone);
    // Merge multiple sources
    // let c = Object.assign({a:1},{b:2},{c:3});console.log("c",c);
    // The Object.create() method creates a new object, using an existing object 
    // const object = {
    //     Name : "Naveed",
    //     RollNo: 120,
    // };
    // console.log("object",object);
    // const NewObject = Object.create(object);
    // NewObject.Name= "Aslam";
    // NewObject.RollNo = 94
    // console.log("NewObject",NewObject);
    
    // Object defineproperties method in javascript
    // const object = {
    //     Name: "Naveed",
    //     RollNo : 120
    // };
    // Object.defineProperties(object , {
    //     object2: {
    //         Name: "Aslam",
    //         RollNo : 94

    //     }
    // });
    // console.log("object",object.object2);
    // Javascript entries in object method
//    const object = {
//        Name : "Naveed",
//        RollNo : 120
//    };
//    for (let [key , value] of Object.entries(object)) {
//     console.log(`${key} ${value}`);
       
//    }
// Javasvript freeze object in javascript
// let a = {
//     Name :  "naveed"
// };
// Object.freeze(a);
// a.Name = "aslam"
// console.log("a",a);

// Object.seal in javascript when sealed cannot delete property from object
// let object = {
//     Name : "naveed",
// };
// Object.seal(object);
// let updated =object.Name="aslam"
// console.log("updated",updated);
// delete object.Name;

// Object.fromEntries convert array into an object
// let a = [
//     [
//         1,2,3,4
//     ],
//     [
//         "Naveed" , "RollNO"
//     ]
// ]
// let b = Object.fromEntries(a);
// console.log("b",b);

// Object.values and Object.keys() in Javascript converted object into array.
// let Name = {
//     Name : "naveed",
//     RollNo: 120,
// }
// let converted = Object.values(Name);
// console.log("converted",converted);
}
   
    return (
        <> <h1>Object Methods</h1> 
        <button onClick={ctaHandler} >CtaHandler</button>
        </>)
}
export default ObjectMethod;