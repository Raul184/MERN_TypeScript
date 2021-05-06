import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import VideoList from './components/videoList/VideoList'
import VideoForm from './components/videoForm/VideoForm';

render(
  <React.StrictMode>
    <h1>Hi</h1>
    <Router>
      <Switch>
        <Route exact path='/' component={VideoList} />
        <Route path='/new' component={VideoForm} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
