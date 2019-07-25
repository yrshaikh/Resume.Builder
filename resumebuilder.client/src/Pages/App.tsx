import React from "react";
import './App.scss';
var tset = "asd";
var tset = "asd2";
import "./AntOverrides.scss";
import {Switch, Route, Redirect} from "react-router-dom";
import {Layout} from "antd";
import AppMenu from "./AppMenu/AppMenu";
// components to be routed
import Home from "./Home/Home";
import Authentication from "./Authentication/Authentication";
import Features from "./Features/Features";
import PageNotFound from "./Common/PageNotFound/PageNotFound"

const {Header, Content} = Layout;

interface IAppProps {
    location?: {
        pathname: string
    }
}

class App extends React.Component<IAppProps, any> {
    render() {
        const HeaderLayout = (
            <Header>
                <div className="AppLayout__Logo"/>
                <AppMenu/>
            </Header>
        );

        const path = this.props.location != null ? this.props.location.pathname : '';

        return (
            <Layout className="AppLayout">
                {(path !== "/entry") ? HeaderLayout : null}
                <Content className="AppLayout__Content">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props: IAppProps) => <Home {...props} />}
                        />
                        <Route
                            path="/authentication"
                            render={(props: IAppProps) => <Authentication {...props} />}
                        />
                        <Route
                            path="/features"
                            render={(props: IAppProps) => <Features {...props} />}
                        />
                        <Route
                            path="/pagenotfound"
                            render={(props: IAppProps) => <PageNotFound {...props} />}
                        />
                        <Redirect
                            from="/**"
                            to="/pagenotfound"
                        />
                    </Switch>
                </Content>
            </Layout>
        );
    };
}

export default App;
