function ArrayMethod(props) {
    const ctaHandler = () => {
    //     let a = [10,12,15,18,20];
    //     const filterMethod = a.filter((elem)=>{
    //     if(elem> 15){
    //       console.log("elem Greater than 15",elem);
    //     }
    //   })

    // The find() method returns the value of the first element in the provided array that satisfies the provided testing function
    const array1 = [1,2,3,4,5,6,7];
    let newArray = array1.find(element => element>4);
    console.log("newArray",newArray);
    }
    return (
        <>
            <h3>Array Methods</h3>
            <button onClick={ctaHandler}>CtaHandler</button>
        </>
    )
}
export default ArrayMethod;