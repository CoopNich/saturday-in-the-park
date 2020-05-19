import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Park from "./components/Park"
import './index.css';

ReactDOM.render(
  <Router>
    <Park />
  </Router>,
  document.getElementById('root')
);

