import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../../Signing/SocialLogin/SocialLogin';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../../firebase.init';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
        auth
    );

    if (user) {
        console.log(user, 'user found');
        // navigate('/');
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>;
    }
    if (error) {
        errorElement =
            <div>
                <p className='text-danger mt-2'>Error Occurred: <span className='fw-bold'>{error?.message}</span> </p>
            </div>
    }

    const handleBlurEmail = event => {
        setEmail(event.target.value);
        // console.log(email);
    }

    const handleBlurPassword = event => {
        setPassword(event.target.value);
        // console.log(password);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log(email, password);
        await signInWithEmailAndPassword(email, password);

        // jwt token works
        const { data } = await axios.post('https://lit-tundra-62538.herokuapp.com/login', { email });
        // console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        // navigate(from, { replace: true });
    }

    // Reset Password
    const resetPassword = async () => {
        // console.log('reset');
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('provide email');
        }
    }

    return (
        <div className='login-container'>
            <h2 className='text-center text-success'>Login</h2>
            <form action="" onSubmit={handleLogin}>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" onBlur={handleBlurEmail} required />
                </div>
                <br />

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" onBlur={handleBlurPassword} required />
                </div>
                <br />

                <div className="form-group">
                    <span className='text-primary ps-3 text-cl swap-register d-block  text-center fw-bold text-info'
                        onClick={() => navigate('/register')}
                    >New User? Go to Register </span>
                </div>
                <br />

                <div className="form-group">
                    <span className=' text-primary ps-3 text-cl swap-register d-block  text-center fw-bold text-info'
                        onClick={() => resetPassword()}
                    >Reset Password</span>
                    <ToastContainer />
                </div>
                <br />

                <div className="form-group submit-btn">
                    <button className='border-0'> <span className='login-btn'
                    >Login</span> </button>
                </div>
                {errorElement}
            </form>
            <SocialLogin></SocialLogin>



        </div>
    );
};

export default Login;