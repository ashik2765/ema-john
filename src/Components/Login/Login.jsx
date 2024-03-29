import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>
                Login
            </h1>
            <form onSubmit={handleLogin}>
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
                    <input type={show? "text":"password"} name='password' required />
                    <p onClick={() => setShow(!show)}>
                        <small>
                            {
                                show ? <span>Hide password</span> : <span>Show password</span>
                            }
                        </small>
                    </p>
                </div>
                <button className='btn-submit' type="submit" value="log in">Login</button>
            </form>
            <p><small>New to Ema-john? <Link to="/signup">Create New Account</Link></small> </p>
        </div>
    );
};

export default Login;