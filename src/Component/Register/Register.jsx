import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";



const Register = () => {
    const [registerError,setRegisterError] = useState('');
    const [success,setSuccess] = useState('')
    const[showPassword,setShowPassword]=useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conditions = e.target.terms.checked;
        console.log(email,password,conditions)
        
        // if(password.length<6){
        //     setRegisterError('Password should be at least 6 characters or longer');
        //     return;
        // }
        
        setRegisterError('')
        setSuccess('')

        if(password.length<6){
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('your password must have an uppercase')
            return;
        }
        else if(!conditions){
            setRegisterError('please accept our terms and conditions')
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess('user created successfully')
            // setRegisterError('user create successfully')
            sendEmailVerification(result.user)
            .then(()=>{
            alert('please verify your account')
            })


        })
        .catch(error=>{
            console.error(error)
            setRegisterError(error.message)
        })
    }
    return (
        <div className="">
            <div className="mx-auto container">
            <form onSubmit={handleRegister}>
                <div className="mx-auto w-1/3">
                <input className="mb-4 px-2 py-2 w-full" type="email" name="email" placeholder="enter your email account" required/> <br />

                <div className="relative">
                <input className=" px-2 py-2 w-full"
                type={showPassword?"text":"password"} name="password" 
                placeholder="enter password" 
                required/>
                     
                <span className="mb-4 absolute top-3 right-2" onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}
                    </span></div> <br />
                    <div>
                        <input className="mr-2" type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Please accept our <a className="text-blue-600 underline" href="">terms and conditions</a> </label>
                    </div>
                <input type="submit" name="submit" value="submit" />
                </div>
            </form>
            <p>Already have an account? please <Link className="text-red-600 underline font-semibold" to={'/login'}>Login</Link></p>
            {
                registerError && <p>{registerError}</p>
            }
            {
                success && <p>{success}</p>
            }
            </div>
            
            
        </div>
    );
};

export default Register;