import '../styles/register.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

function Login() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({});
    const [emailErrorMsg, setEmailErrorMsg] = useState(null);
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(null);
    const passwordValue = watch('password', '');
    const loginUser = (formData) => {
        axios.post('http://localhost:3001/v1/users/login', formData).then(response => {
            
        }).catch(error => {
            if (error.response.data?.errorDescription) {
                if (error.response.data.errorDescription === 'Email is not registered') {
                    setEmailErrorMsg('Email is not registered');
                } else {
                    setPasswordErrorMsg('Incorrect password');
                }
            }
        });
    };
    return (<div className="outer-wrapper text-center">
        <div className="wrapper">
            <form noValidate onSubmit={handleSubmit(loginUser)}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="email" placeholder="Email" id="email" {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/ })} />
                    {errors.email?.type === 'required' && <p className="error-msg">Email is mandatory</p>}
                    {errors.email?.type === 'pattern' && <p className="error-msg">Incorrect email format</p>}
                    {emailErrorMsg && <p className="error-msg">{emailErrorMsg}</p>}
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" id="password" {...register("password", {
                        required: true })} />
                    {errors.password?.type === 'required' && <p className="error-msg">Password is mandatory</p>}
                    {passwordErrorMsg && <p className="error-msg">{passwordErrorMsg}</p>}
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    </div>)
}

export default Login;