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
};

interface IAppState {
    enableHeader: boolean
};

class App extends React.Component<IAppProps, IAppState> {
    state: IAppState;

    constructor(props: IAppProps) {
        super(props);

        this.state = {
            enableHeader: true
        };

        this.hideHeader = this.hideHeader.bind(this);
    }

    private hideHeader(value: boolean) {
        this.setState({
            enableHeader: value
        });
    }

    render() {
        console.log(this.state);
        const HeaderLayout = (
            <Header>
                <div className="AppLayout__Logo" />
                <AppMenu />
            </Header>
        );

        return (
            <Layout className="AppLayout">
                {(this.state.enableHeader) ? HeaderLayout : null}
                <Content className="AppLayout__Content">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props: IAppProps) => <Home {...props} hideHeader={this.hideHeader} />}
                        />
                        <Route
                            path="/entry"
                            render={(props: IAppProps) => <Entry {...props} hideHeader={this.hideHeader} />}
                        />
                        <Route
                            path="/features"
                            render={(props: IAppProps) => <Features {...props} hideHeader={this.hideHeader} />}
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
