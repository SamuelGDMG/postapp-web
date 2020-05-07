import React from 'react';
import { Button, Input, Row } from 'antd';
import {Container, AnimationContainer} from './styles'
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

const SignUp = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <Container>
                <AnimationContainer>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Input style={{width: 300}} size="large" placeholder="Nome" prefix={<UserOutlined />} />
                        </Row>
                        <Row>
                            <Input style={{width: 300}} size="large" placeholder="Email" prefix={<MailOutlined />} />
                        </Row>
                        <Row>
                            <Input.Password style={{width: 300}} size="large" placeholder="Senha" prefix={<LockOutlined />} />
                        </Row>
                        <Row style={{display: 'flex', justifyContent: 'center'}}>
                            <Button type="primary" danger>Registrar-se</Button>
                        </Row>
                    </form>
                </AnimationContainer>
        </Container>
        </>
    )
}

export default SignUp