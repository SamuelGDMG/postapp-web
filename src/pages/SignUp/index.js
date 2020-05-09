import React, {useState} from 'react';
import { Button, Input, Row, Dropdown, Menu } from 'antd';
import {Container, AnimationContainer, Background} from './styles'
import { MailOutlined, LockOutlined, UserOutlined, ToolOutlined, ArrowLeftOutlined, RocketOutlined, LaptopOutlined } from '@ant-design/icons';
import './styles.less'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [course, setCourse] = useState('Curso');

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name)
        console.log(email)
        console.log(password)
        console.log(course)
    }

    function handleMenuClick(e) {
        if(e.key === 1){
            setCourse('Analise e desenvolvimento de sistemas')
        }
    }

    const menu = (
        <Menu >
          <Menu.Item onClick={handleMenuClick} key="1" icon={<LaptopOutlined />}>
            Análise e Desenvolvimento de sistemas
          </Menu.Item>
          <Menu.Item key="2" icon={<RocketOutlined />}>
            Mecatrônica
          </Menu.Item>
          <Menu.Item key="3" icon={<ToolOutlined />}>
            Engenharia
          </Menu.Item>
        </Menu>
      );

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
                        <Dropdown  overlay={menu}>
                            <Button shape="round" className="course-dropdown">
                                {course}
                            </Button>
                        </Dropdown>
                        </Row>
                        <Row style={{display: 'flex', justifyContent: 'center'}}>
                            <Button onClick={handleSubmit} shape="round" className="button" type="primary" danger>Registrar-se</Button>
                        </Row>
                        <Link className="link-to-login" to='/'>
                            <h4 className="go-back-login"><ArrowLeftOutlined style={{paddingRight: 10}} />Voltar para o login</h4>
                        </Link>
                    </form>
                </AnimationContainer>
        </Container>
        </Background>
        </>
    )
}

export default SignUp