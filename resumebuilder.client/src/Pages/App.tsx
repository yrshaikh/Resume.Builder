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

interface IProps {
};

interface IState {
    DisplayMenu: Boolean
};

class App extends React.Component<IProps, IState> {
    state: IState;

    constructor(props: IProps) {
        super(props);

        this.state = {
            DisplayMenu: true
        };

        this.handleDisplayMenu = this.handleDisplayMenu.bind(this);
    }

    private handleDisplayMenu(value: boolean) {
        this.setState({
            DisplayMenu: value
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
                {(this.state.DisplayMenu) ? HeaderLayout : null}
                <Content className="AppLayout__Content">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props: IProps) => <Home {...props} handleDisplayMenu={this.handleDisplayMenu} />}
                        />
                        <Route
                            path="/entry"
                            render={(props: IProps) => <Entry {...props} handleDisplayMenu={this.handleDisplayMenu} />}
                        />
                        <Route
                            path="/features"
                            render={(props: IProps) => <Features {...props} handleDisplayMenu={this.handleDisplayMenu} />}
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
