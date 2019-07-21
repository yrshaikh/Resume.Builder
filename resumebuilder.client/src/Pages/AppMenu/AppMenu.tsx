import React from "react";
import "./AppMenu.scss";
import {Menu} from "antd";
import {Link} from "react-router-dom";

const AppMenu: React.FC = () => {
    const selectedMenu = ["1"];
    return (
        <Menu
            className="AppMenu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={selectedMenu}
        >
            <Menu.Item key="1">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/features">Features</Link>
            </Menu.Item>
            <Menu.Item
                className="AppMenu__Item--right AppMenu__Item--callToAction"
                key="3"
            >
                <Link to="/authentication">Create an account</Link>
            </Menu.Item>
            <Menu.Item className="AppMenu__Item--right" key="4">
                <Link to="/authentication">Sign In</Link>
            </Menu.Item>
        </Menu>
    );
};

export default AppMenu;
