import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

// Script package.json --> "build": "react-scripts build",
const App = () => {
  useEffect(() => {
    axios.get('/api/bears')
        .then(res => setBears(res.data))
        .catch(error => console.log(error))
  }, []);

  const [bears, setBears] = useState([]);

  return (
      <div className="App">
        <h2>Bears in Canada:</h2>
        <div>
          <ul>
            {bears.map((b,idx) => {
              return (
                  <li>
                    {idx}. {b}
                  </li>
              )
            })}
          </ul>
        </div>
      </div>
  );
}

export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and Test Pipeline without yarn
        </a>
      </header>
    </div>
  );
}

export default App*/
