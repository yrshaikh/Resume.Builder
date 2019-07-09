import React from 'react';
import './App.css';
import {Layout, Menu} from 'antd';

const {Header, Content} = Layout;

const App: React.FC = () => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                    <Menu.Item key="4" style={{float: 'right'}}>Create an account</Menu.Item>
                    <Menu.Item key="5" style={{float: 'right'}}>Sign In</Menu.Item>
                </Menu>
            </Header>
            <Content className="layout__content">
                <div className="layout__contentDiv">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </Content>
        </Layout>
    );
}

export default App;
