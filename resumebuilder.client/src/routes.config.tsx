import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Features from "./Pages/Features/Features";
import Entry from "./Pages/Entry/Entry";

const Routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/features",
        component: Features
    },
    {
        path: "/entry",
        component: Entry
    }
];

export default Routes;