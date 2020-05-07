import React, {useState} from 'react';
import { Button, Input, Modal } from 'antd';
import {Container, Content, AnimationContainer} from './styles'
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const SignUp = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
        <Container>
            <Content>
                <AnimationContainer>
                    <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
                    <Input.Password size="large" placeholder="Senha" prefix={<LockOutlined />} />
                    <Button onClick={() => setVisible(true)} type="primary" danger>Ir para Home</Button>
                    <Modal title="modal do samuel gay" visible={visible}><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    </Modal>
                </AnimationContainer>
            </Content>
        </Container>
        </>
    )
}

export default SignUp