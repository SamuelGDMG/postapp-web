import React from 'react';
import { Menu, Dropdown, message } from 'antd';
import { NavBar, Opcoes } from './style';
import {AnimationContainer} from './style'

import { FiLogOut } from 'react-icons/fi';

//<MoreOutlined />

const Home = () => {


    return (
        <>
                    <AnimationContainer>
                        <NavBar>
                            <div>

                            </div>

                            <div>

                            </div>

                            <Opcoes>
                                    <Dropdown overlay={menu}>
                                            <FiLogOut size={30}/>
                                    </Dropdown>
                            </Opcoes>
                        </NavBar>
                    </AnimationContainer>
        </>
    );

}

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" >
            1st menu item
      </Menu.Item>
        <Menu.Item key="2" >
            2nd menu item
      </Menu.Item>
        <Menu.Item key="3">
            3rd item
      </Menu.Item>
    </Menu>
);

export default Home;