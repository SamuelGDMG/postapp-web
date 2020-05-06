import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'antd';
import {Container, Content, AnimationContainer, Input} from './styles'
import { UserOutlined } from '@ant-design/icons';

const SignIn = () => {
    return (
        <>
        <Container>
            <Content>
                <AnimationContainer>
                    <UserOutlined/><Input name="name" placeholder="Nome"></Input>
                    <Input name="email" placeholder="Email"></Input>
                    <Input name="password" placeholder="Senha" type="password"></Input>
                    <Link to="/home"><Button danger>Ir para Home</Button></Link>
                </AnimationContainer>
            </Content>
        </Container>
        </>
    )
}

export default SignIn