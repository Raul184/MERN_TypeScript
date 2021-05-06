import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import VideoList from './components/v/VideoList'

render(
  <React.StrictMode>
    <h1>Hi</h1>
    <Router>
      <Switch>
        <Route path='/' component={VideoList} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
