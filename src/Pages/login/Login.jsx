import React from 'react'
import "./login.scss";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login();
    };

  return (
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Hello World.</h1>
                <p> Lorem ipsum dolor sit amet consectetur. Quidem dicta nesciunt, debitis laborum voluptas nihil ipsum eos repellendus.</p>
                <span>Don't you have an account?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
               
            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <Link to="/">
                <button onClick={handleLogin}>Login</button>
                </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login