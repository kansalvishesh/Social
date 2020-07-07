import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './container/home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'antd/dist/antd.css';
import About from './container/about';
import Blog from './container/blog';
import Contact from './container/contact';

 

const app = (
  <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
      </div>
  </Router>
)



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();