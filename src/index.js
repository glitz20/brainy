import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom' //don't need to specify localhost url in axios http address
import {Switch} from 'react-router'

import App from './App';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import Description from './components/description'
import Signup from './components/sign-up';
import Home from './components/home'


//style
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import './index.css';
import LoginForm from './components/login-form';

ReactDOM.render(
    <Router>

        <App /> 		

        <div>
            <Switch>
            <Route exact path='/' component={App} />
            <Route path='/add-item' component={AddItem} />
            <Route path='/edit/:id' component={EditItem} />
            <Route path="/signup" component={Signup} />
                <Route path="/login" component={LoginForm} />
                <Route path="/home" component={Home} />

            
                <Route path='/description/:id' component={Description} />
            </Switch>
        </div>
		

	</Router>,
	document.getElementById('root')
)
