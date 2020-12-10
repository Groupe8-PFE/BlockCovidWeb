import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from './components/App/AppContainer';

ReactDOM.render(
    <Router>
        <AppContainer />
    </Router>, document.getElementById('root'))    


   
