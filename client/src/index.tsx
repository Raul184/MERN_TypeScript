import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import 'bootswatch/dist/pulse/bootstrap.min.css'

import VideoList from './components/videoList/VideoList'
import VideoForm from './components/videoForm/VideoForm';
import Nav from './components/nav/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

render(
  <React.StrictMode>
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path='/' component={VideoList} />
          <Route path='/new' component={VideoForm} />
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
