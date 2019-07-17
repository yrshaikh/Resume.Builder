import React from "react";
import "./App.scss";
import "./AntOverrides.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import AppMenu from "./AppMenu/AppMenu";
import Routes from "../routes.config";

const { Header, Content } = Layout;

const App: React.FC = () => {
    return (
        <Layout className="AppLayout">
            <Header>
                <div className="AppLayout__Logo" />
                <AppMenu />
            </Header>
            <Content className="AppLayout__Content">
                <Router> 
                    {Routes.map(({path, component}) => <Route exact path={path} component={component}/>)}
                </Router>
            </Content>
        </Layout>
    );
};

export default App;
