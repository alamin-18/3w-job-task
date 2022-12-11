import React from 'react';
import './Login.css'
const LogIn = () => {
    return (
        <div className='d-flex justify-content-center align-items-center bg-main'>
            <form className="form bg-white">
                <h2>Login</h2>
                <div className="input-group">
                    <input type="text" name="loginUser" id="loginUser" required />
                    <label for="loginUser">User Name</label>
                </div>
                <div className="input-group">
                    <input type="password" name="loginPassword" id="loginPassword" required />
                    <label for="loginPassword">Password</label>
                </div>
                <input type="submit" value="Login" className="submit-btn" />
                <a href="#forgot-pw" className="forgot-pw">Forgot Password?</a>
            </form>
            </div>
            );
};

export default LogIn;