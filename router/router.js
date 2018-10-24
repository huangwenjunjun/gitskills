import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import Bundle from './bundle'

import Home from 'bundle-loader?lazy&name=home!../src/pages/Home/Home'
import Page1 from 'bundle-loader?lazy&name=page1!../src/pages/Page1/Page1'
import Counter from 'bundle-loader?lazy&name=counter!../src/pages/Counter/Counter'
import UserInfo from 'bundle-loader?lazy&name=userInfo!../src/pages/UserInfo/UserInfo'

const Loading = function () {
    return <div>loading......</div>
}

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props}/> : <Loading />
        }
    </Bundle>
);

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={createComponent(Home)}/>
                <Route exact path="/page1" component={createComponent(Page1)}/>
                <Route exact path="/counter" component={createComponent(Counter)}/>
                <Route exact path="/userinfo" component={createComponent(UserInfo)}/>
            </Switch>
        </div>
    </Router>
)

export default getRouter;