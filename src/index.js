import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from "react-router-dom";

// function App() {
//   return <h1>Hello React Router</h1>;
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();