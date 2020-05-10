import React, {useState, useCallback} from 'react';
import { Button, Input, Row } from 'antd';
import {Container, AnimationContainer, Background} from './styles'
import { MailOutlined, LockOutlined, UserOutlined, ArrowRightOutlined, LoginOutlined } from '@ant-design/icons';
import './styles.less'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'

const SignIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const history = useHistory()

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault()

        try{

        const data = {
            name: name,
            password: password,
            email: email
        }

        const response = await api.post('/users', data);

        const {token} = response.data

        localStorage.setItem('token', token);

        history.push('/home')
    }catch(err){
        console.log(err)
    }

    }, [history, email, name, password])

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
                            <Button onClick={handleSubmit} shape="round" className="button" type="primary" danger><Link to='/home'><LoginOutlined style={{paddingRight: 10}} />Logar</Link></Button>
                        </Row>
                        <Link className="link-to-login" to='/signup'>
                            <h4 className="go-back-login"><ArrowRightOutlined style={{paddingRight: 10}} />Não tem conta? Cadastre-se</h4>
                        </Link>
                    </form>
                </AnimationContainer>
        </Container>
        </Background>
        </>
    )
}

export default SignIn