import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'antd';

const SignIn = () => {
    return (
        <>
        <h1>Login</h1>
        <Link to="/home"><Button danger>Ir para Home</Button></Link>
        </>
    )
}

export default SignIn