import React from 'react';
import './SocialLogin.css';
import google from '../../../../Images/logo/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
// import Loading from '../../../Shared/Loading/Loading';
import { Spinner } from 'react-bootstrap';
import auth from '../../../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let loadingSpinner;

    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user, 'google signed IN');
        // navigate('/services');
        navigate(from, { replace: true });
    }
    if (loading) {
        loadingSpinner = <Spinner animation="grow" variant="info" />
    }
    if (error) {
        errorElement =
            <div>
                <p className='text-danger mt-2'>Error Occurred: <span className='fw-bold'>{error?.message}</span> </p>
            </div>
    }

    return (
        <div>
            <div className='divider'>
                <div className='left-divider'></div>
                <p>or</p>
                <div className='right-divider'></div>
            </div>

            <button onClick={() => signInWithGoogle()} className='google-signin d-block mx-auto border-0' >
                <div className='d-flex align-items-center justify-content-center'>
                    <span className='mt-1'>{loadingSpinner}</span>
                    <img src={google} alt="" />
                    <span className=''>Sign In With Google</span>
                </div>
            </button>
            {errorElement}
        </div>
    );
};

export default SocialLogin;