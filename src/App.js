import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Blog from './composants/Blog';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blog />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
