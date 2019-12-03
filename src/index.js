import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Switch, Router, Route, Link } from 'react-router-dom'

// import Title from './Components/Title'
// import Form from './Components/Form'
// import { Route, Link, BrowserRoute as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
