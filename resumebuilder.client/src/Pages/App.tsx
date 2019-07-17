import React from "react";
import "./App.scss";
import "./AntOverrides.scss";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import AppMenu from "./AppMenu/AppMenu";
import Home from "./Home/Home";
import Features from "./Features/Features";

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
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/features" component={Features} />
                    </div>
                </Router>
            </Content>
        </Layout>
    );
};

export default App;
