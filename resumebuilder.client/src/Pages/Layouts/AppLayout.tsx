import React from 'react';
import './AppLayout.scss';
import {Layout} from 'antd';

import AppMenu from './components/AppMenu/AppMenu';
import Home from '../Home/Home';

const {Header, Content} = Layout;

const AppLayout: React.FC = () => {
    return (
        <Layout className="AppLayout">
            <Header>
                <div className="AppLayout__Logo"/>
                <AppMenu />
            </Header>
            <Content className="AppLayout__Content">
                <Home />
            </Content>
        </Layout>
    );
};

export default AppLayout;
