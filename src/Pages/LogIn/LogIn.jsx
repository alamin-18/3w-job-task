import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { GoogleLogin } from '@react-oauth/google';
const LogIn = () => {
    return (
        <div style={{ height: "100vh" }} className='  bg-main d-flex align-items-center justify-content-sm-center '>
            <div className='form p-5'>
                <form action="" >
                    <label htmlFor="">Enter your Email</label>
                    <br /> <br />
                    <input className='input-email' type="text" placeholder='Email' />
                    <br /> <br />
                    <label htmlFor="">Enter Password</label>
                    <br /> <br />
                    <input className='input-email' type="password" placeholder='Password' />
                    <br /> <br />
                    <input className='input-btn' type="submit" value='Log In' placeholder='Password' />
                </form>
                <p className='text-center mt-2'>Don't have an account? <Link to='../singup' className='text-color text-decoration-none '>Signup</Link></p>
                <h3 className='text-center mt-2'>Or</h3>
                <div className='d-flex justify-content-sm-center gap-4 font-2'>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;
                </div>
            </div>
        </div>
    );
};

export default LogIn;