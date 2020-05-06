import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'antd';

const Home = () => {
    return (
        <>
        <h1>Home</h1>
        <Link to="/signup"><Button danger>Ir para Registrar</Button></Link>
        </>
    )
}

export default Home