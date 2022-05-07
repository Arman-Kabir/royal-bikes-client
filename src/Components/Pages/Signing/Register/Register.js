import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import SocialLogin from '../../Signing/SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';
import './Register.css';
import auth from '../../../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";

    // use create user with email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // use Send Email Verification
    const [sendEmailVerification, sending, errorVerification] = useSendEmailVerification(auth);


    const handleBlurEmail = event => {
        setEmail(event.target.value);
        // console.log(email);
    }

    const handleBlurPassword = event => {
        setPassword(event.target.value);
        // console.log(password);
    }

    if (user) {
        console.log(user, 'New User Registered');
        // navigate('/');
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement =
            <div>
                <p className='text-danger my-0'>Error Occurred: <span className='fw-bold'>{error?.message}</span> </p>
            </div>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        console.log(email, password);
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
    }

    return (
        <div className='login-container'>
            <h2 className='text-center text-success'>Register</h2>
            <form action="" onSubmit={handleRegister}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="" />
                </div>
                <br />

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" onBlur={handleBlurEmail} required/>
                </div>
                <br />

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" onBlur={handleBlurPassword} required/>
                </div>
                <br />

                <div className="form-group">
                    {/* <input type="checkbox" name="checkbox" id="" /> */}
                    <span className='text-primary ps-3 text-cl swap-register d-block  text-center fw-bold text-info'
                        onClick={() => navigate('/login')}
                    >Already Registered? Go to Login </span>
                </div>
                <br />
                {errorElement}
                <div className="form-group submit-btn">
                    <button className='border-0 p-2 register-btn'

                    >Register</button>
                </div>

            </form>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;