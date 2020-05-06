import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Form, Input, Button, Modal, Row, Col } from 'antd';

const SignUp = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <Row align="middle "  justify="center " style={{ padding: 12 }}>
            <Col flex={1}>
                <Link to="/"><Button type="primary" danger>Ir para Login</Button></Link>
                <Button onClick={() => setIsVisible(true)}></Button>
                {isVisible === true ? <Modal><p>AAAAAAAAAA</p></Modal> : null}
            </Col>
        
    </Row>
    )
}

export default SignUp