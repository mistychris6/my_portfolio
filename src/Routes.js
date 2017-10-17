import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Work from './pages/Work'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default () => (
    <Router>
        <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/work" component = {Work} />
            <Route exact path = "/contact" component = {Contact} />
            <Route component = {NotFound} />
        </Switch>
    </Router>
)