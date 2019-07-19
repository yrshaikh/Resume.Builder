import React from "react";
import "./App.scss";
import "./AntOverrides.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import AppMenu from "./AppMenu/AppMenu";
// components to be routed
import Home from "./Home/Home";
import Entry from "./Entry/Entry";
import Features from "./Features/Features";

const { Header, Content } = Layout;

interface IAppProps {
    location: {
        pathname: string
    }
};

class App extends React.Component<IAppProps, any> {
    render() {
        const HeaderLayout = (
            <Header>
                <div className="AppLayout__Logo" />
                <AppMenu />
            </Header>
        );

        return (
            <Layout className="AppLayout">
                {(this.props.location.pathname !== "/entry") ? HeaderLayout : null}
                <Content className="AppLayout__Content">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props: IAppProps) => <Home {...props} />}
                        />
                        <Route
                            path="/entry"
                            render={(props: IAppProps) => <Entry {...props} />}
                        />
                        <Route
                            path="/features"
                            render={(props: IAppProps) => <Features {...props} />}
                        />
                        <Redirect
                            from="/**"
                            to="/"
                        />
                    </Switch>
                </Content>
            </Layout>
        );
    };
};

export default App;
