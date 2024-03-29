import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(confirm, email, password)

        setError('');
        if (password !== confirm) {

            setError('Your password did not match')
            return;
        }
        else if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>
                Sign Up
            </h1>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">
                        Confirm Password
                    </label>
                    <input type="password" name='confirm' required />
                </div>
                <button className='btn-submit' type="submit" value="Sign up">Sign Up</button>
            </form>
            <p><small>Already have an Account? <Link to="/login">Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;