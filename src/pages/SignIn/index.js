import React, {useState} from 'react';
import { Button, Input, Row } from 'antd';
import {Container, AnimationContainer, Background} from './styles'
import { MailOutlined, LockOutlined, UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import './styles.less'
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name)
        console.log(email)
        console.log(password)
    }

    return (
        <>
        <Background>
        <Container>
                <AnimationContainer>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Input onChange={(e) => setName(e.target.value)} className="input" style={{width: 300}} size="large" placeholder="Nome" prefix={<UserOutlined />} />
                        </Row>
                        <Row>
                            <Input onChange={(e) => setEmail(e.target.value)} className="input" style={{width: 300}} size="large" placeholder="Email" prefix={<MailOutlined />} />
                        </Row>
                        <Row>
                            <Input.Password onChange={(e) => setPassword(e.target.value)} className="input" style={{width: 300}} size="large" placeholder="Senha" prefix={<LockOutlined />} />
                        </Row>
                        <Row style={{display: 'flex', justifyContent: 'center'}}>
                        </Row>
                        <Row style={{display: 'flex', justifyContent: 'center'}}>
                            <Button onClick={handleSubmit} shape="round" className="button" type="primary" danger>Logar</Button>
                        </Row>
                        <Link className="link-to-login" to='/signup'>
                            <h4 className="go-back-login"><ArrowLeftOutlined style={{paddingRight: 10}} />Não tem conta? Cadastre-se</h4>
                        </Link>
                    </form>
                </AnimationContainer>
        </Container>
        </Background>
        </>
    )
}

export default SignIn