import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'antd';

const SignUp = () => {
    return (
        <>
        <h1>Registrar</h1>
        <Link to="/"><Button type="primary" danger>Ir para Login</Button></Link>
        </>
    )
}

export default SignUp