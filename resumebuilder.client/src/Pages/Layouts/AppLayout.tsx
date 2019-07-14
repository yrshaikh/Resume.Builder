import React from 'react';
import './AppLayout.scss';
import {Layout, Menu} from 'antd';

const {Header, Content} = Layout;

const AppLayout: React.FC = () => {

    const GetMenu = () => {
        return (
            <Menu className="AppMenu"
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['1']}
                  style={{lineHeight: '64px'}}
            >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Features</Menu.Item>
                <Menu.Item className="AppMenu__CreateAccount" key="4" style={{float: 'right'}}>Create an
                    account</Menu.Item>
                <Menu.Item key="5" style={{float: 'right'}}>Sign In</Menu.Item>
            </Menu>
        );
    }

    const GetContent = () => {
        return (
            <div className="AppLayout__Content__Wrapper">
                <h1 className="AppLayout__Content__Wrapper__Title">Lorem ipsum dolor sit amet?</h1>
                <ul>
                    <li><h2>Ut enim ad minim veniam</h2></li>
                    <li><h2>Ut enim ad minim veniam</h2></li>
                    <li><h2>Ut enim ad minim veniam</h2></li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        );
    }

    return (
        <Layout className="AppLayout">
            <Header>
                <div className="AppLayout__Logo"/>
                {GetMenu()}
            </Header>
            <Content className="AppLayout__Content">
                {GetContent()}
            </Content>
        </Layout>
    );
};

export default AppLayout;
