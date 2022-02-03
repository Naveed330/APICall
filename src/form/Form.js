import { useForm } from "react-hook-form";
function Validation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Enter Email Here..." type="text" autocomplete="off" {...register("Email", { required: true , pattern:/@/})} /><br/><br/>
        <p style={{color:"red"}}>
        {errors.Email?.type === 'required' && "Email is required"}
        {errors.Email?.type === 'pattern' && "Please Enter a Valid Email"}
        </p>
        <input placeholder="Enter Password Here..." type="Password" autocomplete="off" {...register("password", { required:true, minLength:3, maxLength:8})} /><br/><br/>
        <p style={{color:"red"}}>
        {errors.password?.type === 'required' && "Password is required"}
        {errors.password?.type === 'minLength' && "Minimum Length is 3"}
        {errors.password?.type === 'maxLength' && "Maximum Length is 8"}
        </p>
        <button type="submit">Submit</button>
        </form>
        </>);
}
export default Validation;


//     /^\d{10}$/ phone number pattern for validation