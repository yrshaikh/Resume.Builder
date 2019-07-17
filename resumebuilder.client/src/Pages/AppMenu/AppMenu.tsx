import React from "react";
import "./AppMenu.scss";
import { Menu } from "antd";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const AppMenu: React.FC = () => {
    const selectedMenu = ["1"];
    return (
        <Menu
            className="AppMenu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={selectedMenu}
        >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Features</Menu.Item>
            <Menu.Item
                className="AppMenu__Item--right AppMenu__Item--callToAction"
                key="3"
            >
                Create an account
            </Menu.Item>
            <Menu.Item className="AppMenu__Item--right" key="4">
                Sign In
            </Menu.Item>
        </Menu>
    );
};

export default AppMenu;
