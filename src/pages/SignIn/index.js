import React from 'react';
import {Link} from 'react-router-dom'
import { Button, Input } from 'antd';
import {Container, Content, AnimationContainer} from './styles'
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const SignIn = () => {
    return (
        <>
        <Container>
            <Content>
                <AnimationContainer>
                    <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
                    <Input.Password size="large" placeholder="Senha" prefix={<LockOutlined />} />
                    <Link to="/home"><Button danger>Ir para Home</Button></Link>
                </AnimationContainer>
            </Content>
        </Container>
        </>
    )
}

export default SignIn